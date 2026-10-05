// Builds the national roofing coverage dataset from LeadSmart state shards.
// Usage: node scripts/build-coverage.mjs <dir with {ST}.json shards from leadsmart-coverage.netlify.app/api/state/>
// Writes src/data/coverage-zips.json (server-only ZIP index) and src/data/coverage-states.json (per-state summary).
// Payouts are used only to rank metros for rollout; they are never written to the UI.
import fs from "fs";
import path from "path";

const dir = process.argv[2];
if (!dir) throw new Error("pass the shard directory");
const zips = {};
const states = {};

for (const file of fs.readdirSync(dir).filter((f) => f.endsWith(".json"))) {
  const shard = JSON.parse(fs.readFileSync(path.join(dir, file), "utf8"));
  const st = shard.state;
  const cities = new Map();
  let zipCount = 0;
  for (const r of shard.rows) {
    const niche = r[2] < 0 ? "" : shard.niche[r[2]];
    const ptype = r[3] < 0 ? "" : shard.ptype[r[3]];
    if (niche !== "Roofing" || ptype !== "Call") continue;
    const city = r[0] < 0 ? null : shard.city[r[0]];
    const zip = String(r[1]).padStart(5, "0");
    const county = r[9] < 0 ? null : shard.county[r[9]];
    if (!city || zips[zip]) continue;
    zips[zip] = [city, st];
    zipCount++;
    const key = city;
    const c = cities.get(key) ?? { city, county, zips: 0, population: r[5] ?? 0, payout: 0 };
    c.zips++;
    c.payout = Math.max(c.payout, r[4] ?? 0);
    if (!c.county && county) c.county = county;
    cities.set(key, c);
  }
  const list = [...cities.values()];
  states[st] = {
    zips: zipCount,
    cities: list.length,
    // Top covered places by ZIP count, then population. Used for "where we connect homeowners" lists.
    topCities: list
      .sort((a, b) => b.zips - a.zips || (b.population ?? 0) - (a.population ?? 0))
      .slice(0, 12)
      .map(({ city, county, zips }) => ({ city, county, zips })),
    // Internal rollout signal only (never rendered).
    maxPayout: Math.max(0, ...list.map((c) => c.payout)),
  };
}

fs.mkdirSync("src/data", { recursive: true });
fs.writeFileSync("src/data/coverage-zips.json", JSON.stringify(zips));
fs.writeFileSync("src/data/coverage-states.json", JSON.stringify(states, null, 1));
console.log("states", Object.keys(states).length, "zips", Object.keys(zips).length);
for (const [st, s] of Object.entries(states).sort((a, b) => b[1].zips - a[1].zips)) console.log(st, s.zips, s.cities, s.maxPayout, s.topCities.slice(0, 4).map((c) => c.city).join(", "));
