// Builds the data-driven city dataset (Wave 5) from LeadSmart state shards.
// Usage: node scripts/build-cities.mjs <dir with {ST}.json shards>
// Output: src/data/cities-generated.json (server-only). Every field is real data from the coverage set:
// covered ZIPs, county, coordinates (for real distances), and a popularity rank. No invented facts.
import fs from "fs";
import path from "path";

const dir = process.argv[2];
if (!dir) throw new Error("pass the shard directory");
const TARGET = 1100;
const MIN_PER_STATE = 5;

// Hand-written city pages (src/content/locations*.ts). Generated pages never duplicate them.
const HANDWRITTEN = {
  TX: ["Houston", "Katy", "Sugar Land", "Missouri City", "Spring", "Tomball", "Humble", "Kingwood", "Conroe", "Pearland", "League City", "Pasadena", "Baytown", "Galveston", "Dallas", "Fort Worth", "San Antonio", "Austin", "The Woodlands", "Atascocita"],
  CO: ["Denver", "Colorado Springs"], OK: ["Oklahoma City", "Tulsa"], GA: ["Atlanta"], MN: ["Minneapolis"], IL: ["Chicago"],
  PA: ["Philadelphia"], CA: ["Los Angeles", "San Diego"], AZ: ["Phoenix"], FL: ["Tampa", "Miami"],
};
const STATE_SLUG = { AL: "alabama", AK: "alaska", AZ: "arizona", AR: "arkansas", CA: "california", CO: "colorado", CT: "connecticut", DE: "delaware", DC: "district-of-columbia", FL: "florida", GA: "georgia", HI: "hawaii", ID: "idaho", IL: "illinois", IN: "indiana", IA: "iowa", KS: "kansas", KY: "kentucky", LA: "louisiana", ME: "maine", MD: "maryland", MA: "massachusetts", MI: "michigan", MN: "minnesota", MS: "mississippi", MO: "missouri", MT: "montana", NE: "nebraska", NV: "nevada", NH: "new-hampshire", NJ: "new-jersey", NM: "new-mexico", NY: "new-york", NC: "north-carolina", ND: "north-dakota", OH: "ohio", OK: "oklahoma", OR: "oregon", PA: "pennsylvania", RI: "rhode-island", SC: "south-carolina", SD: "south-dakota", TN: "tennessee", TX: "texas", UT: "utah", VT: "vermont", VA: "virginia", WA: "washington", WV: "west-virginia", WI: "wisconsin", WY: "wyoming" };
const slugify = (s) => s.toLowerCase().replace(/['.]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const toMiles = (a, b) => {
  const R = 3958.8, r = Math.PI / 180;
  const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const all = [];
for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".json"))) {
  const shard = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
  const st = shard.state;
  if (st === "DC") continue; // D.C. is covered by its own state-level hub
  const by = new Map();
  for (const r of shard.rows) {
    if ((r[2] < 0 ? "" : shard.niche[r[2]]) !== "Roofing" || (r[3] < 0 ? "" : shard.ptype[r[3]]) !== "Call") continue;
    const name = r[0] < 0 ? null : shard.city[r[0]];
    if (!name || r[7] == null || r[8] == null) continue;
    const c = by.get(name) ?? { name, state: st, zips: new Set(), pop: 0, lat: r[7], lng: r[8], county: r[9] < 0 ? null : shard.county[r[9]] };
    c.zips.add(String(r[1]).padStart(5, "0"));
    c.pop = Math.max(c.pop, r[5] ?? 0);
    by.set(name, c);
  }
  // Drop aliases: places that borrow another place's exact coordinates and population (e.g. Kingwood -> Houston).
  const list = [...by.values()];
  const seen = new Map();
  for (const c of list.sort((a, b) => b.zips.size - a.zips.size)) {
    const key = `${c.lat},${c.lng},${c.pop}`;
    if (seen.has(key)) c.alias = true;
    else seen.set(key, c.name);
  }
  for (const c of list) if (!c.alias && c.county) all.push(c);
}

const hand = (c) => (HANDWRITTEN[c.state] ?? []).includes(c.name);
const pool = all.filter((c) => !hand(c));
pool.sort((a, b) => b.pop - a.pop || b.zips.size - a.zips.size);
const chosen = new Set(pool.slice(0, TARGET));
for (const st of Object.keys(STATE_SLUG)) {
  const inState = pool.filter((c) => c.state === st);
  for (const c of inState.slice(0, MIN_PER_STATE)) chosen.add(c);
}

// Unique slugs per state.
const out = [];
const used = new Set();
for (const c of chosen) {
  let slug = slugify(c.name);
  if (used.has(`${c.state}/${slug}`)) slug = `${slug}-${slugify(c.county)}`;
  used.add(`${c.state}/${slug}`);
  out.push({ ...c, slug });
}

// Compass direction from a to b (real geometry), for "about 18 miles north of Dallas".
const bearing = (from, to) => {
  const r = Math.PI / 180;
  const y = Math.sin((to.lng - from.lng) * r) * Math.cos(to.lat * r);
  const x = Math.cos(from.lat * r) * Math.sin(to.lat * r) - Math.sin(from.lat * r) * Math.cos(to.lat * r) * Math.cos((to.lng - from.lng) * r);
  const deg = (Math.atan2(y, x) / r + 360) % 360;
  return ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest"][Math.round(deg / 45) % 8];
};
// Nearest hand-written city guide in the same state (real distance), for a contextual link.
const guides = all.filter(hand);
// Real distances: nearby covered places (any covered place, page or not) and nearby generated pages.
const pageSet = new Set(out.map((c) => `${c.state}/${c.name}`));
for (const c of out) {
  const sameState = all.filter((x) => x.state === c.state && x.name !== c.name);
  const withD = sameState.map((x) => ({ x, d: toMiles(c, x) })).sort((a, b) => a.d - b.d);
  c.nearbyCovered = withD.filter((w) => w.d <= 30).slice(0, 12).map((w) => ({ name: w.x.name, miles: Math.round(w.d), zips: w.x.zips.size }));
  c.nearbyPages = withD
    .filter((w) => pageSet.has(`${w.x.state}/${w.x.name}`) && w.d <= 60)
    .slice(0, 6)
    .map((w) => ({ name: w.x.name, slug: out.find((o) => o.state === w.x.state && o.name === w.x.name).slug, miles: Math.round(w.d) }));
  const g = guides.filter((x) => x.state === c.state).map((x) => ({ x, d: toMiles(c, x) })).sort((a, b) => a.d - b.d)[0];
  c.nearestGuide = g && g.d <= 100 ? { name: g.x.name, slug: slugify(g.x.name), miles: Math.round(g.d) } : null;
  // Reference point: the nearest of the state's 8 largest covered cities (by the dataset's population figure), other than this one.
  const majors = all.filter((x) => x.state === c.state && !x.alias).sort((a, b) => b.pop - a.pop).slice(0, 8).filter((x) => x.name !== c.name);
  const big = majors.map((x) => ({ x, d: toMiles(x, c) })).sort((a, b) => a.d - b.d)[0]?.x;
  if (big) {
    const d = toMiles(big, c);
    c.ref = d >= 3 && d <= 60 ? { name: big.name, miles: Math.round(d), dir: bearing(big, c) } : null;
  }
}

const rows = out
  .sort((a, b) => a.state.localeCompare(b.state) || a.name.localeCompare(b.name))
  .map((c) => ({
    slug: c.slug,
    name: c.name,
    state: c.state,
    stateSlug: STATE_SLUG[c.state],
    county: c.county,
    lat: Math.round(c.lat * 1e4) / 1e4,
    lng: Math.round(c.lng * 1e4) / 1e4,
    rank: c.pop,
    zips: [...c.zips].sort(),
    nearbyCovered: c.nearbyCovered,
    nearbyPages: c.nearbyPages,
    nearestGuide: c.nearestGuide,
    ref: c.ref ?? null,
  }));
fs.writeFileSync("src/data/cities-generated.json", JSON.stringify(rows));
const perState = {};
for (const r of rows) perState[r.state] = (perState[r.state] ?? 0) + 1;
console.log("cities", rows.length, "states", Object.keys(perState).length);
console.log(Object.entries(perState).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join(" "));
