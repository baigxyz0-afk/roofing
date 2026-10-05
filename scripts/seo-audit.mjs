// Crawler-based technical SEO audit. Usage: BASE=http://localhost:3002 node scripts/seo-audit.mjs
// Exit code 1 when any error is found.
const BASE = (process.env.BASE || "http://localhost:3000").replace(/\/$/, "");
const errors = [];
const warns = [];
const err = (u, m) => errors.push(`${u}: ${m}`);
const warn = (u, m) => warns.push(`${u}: ${m}`);

const BANNED = [/in today's fast-paced world/i, /look no further/i, /your trusted partner/i, /we understand that/i, /comprehensive solutions/i, /world-class/i, /one-stop shop/i, /hassle-free/i, /state-of-the-art/i, /peace of mind/i, /lorem ipsum/i, /\{\{[A-Z_]+\}\}/];

async function get(path, opts = {}) {
  const res = await fetch(BASE + path, { redirect: "manual", ...opts });
  return { res, text: res.status < 300 ? await res.text() : "" };
}
const toPath = (loc) => new URL(loc).pathname;
const attr = (html, re) => (html.match(re) || [])[1];

// 1. robots + sitemaps
const robots = (await get("/robots.txt")).text;
if (!robots) err("/robots.txt", "missing");
const index = (await get("/sitemap.xml")).text;
const subs = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => toPath(m[1]));
if (subs.length !== 6) err("/sitemap.xml", `expected 6 sitemaps, got ${subs.length}`);
const urls = [];
const groupOf = new Map();
for (const s of subs) {
  const x = (await get(s)).text;
  for (const m of x.matchAll(/<url><loc>([^<]+)<\/loc><lastmod>([^<]+)<\/lastmod>/g)) {
    urls.push(toPath(m[1]));
    groupOf.set(toPath(m[1]), s.replace(/^\/sitemap-|\.xml$/g, ""));
  }
  if (/<url><loc>[^<]+<\/loc><\/url>/.test(x)) err(s, "url without lastmod");
}
const dupes = urls.filter((u, i) => urls.indexOf(u) !== i);
if (dupes.length) err("sitemaps", `duplicates: ${dupes.join(", ")}`);

// 2. per-page checks
const titles = new Map();
const descs = new Map();
const h1s = new Map();
const links = new Map();
const bodies = new Map();
for (const path of urls) {
  const { res, text: html } = await get(path);
  if (res.status !== 200) {
    err(path, `status ${res.status}`);
    continue;
  }
  const dec = (s) => s && s.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
  const title = dec(attr(html, /<title>([^<]*)<\/title>/));
  const desc = dec(attr(html, /<meta name="description" content="([^"]*)"/));
  const canon = attr(html, /<link rel="canonical" href="([^"]*)"/);
  const robotsMeta = attr(html, /<meta name="robots" content="([^"]*)"/) || "";
  if (!title) err(path, "no title");
  else if (title.length > 65) warn(path, `title ${title.length} chars`);
  if (!desc) err(path, "no description");
  else if (desc.length < 70 || desc.length > 160) warn(path, `description ${desc.length} chars`);
  if (!canon) err(path, "no canonical");
  else if (toPath(canon) !== path) err(path, `canonical points to ${toPath(canon)}`);
  if (/noindex/.test(robotsMeta)) err(path, "noindex page in sitemap");
  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
  if (h1.length !== 1) err(path, `${h1.length} h1 tags`);
  const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  for (const re of BANNED) if (re.test(text)) err(path, `banned phrase ${re}`);
  // Main content only (header/footer/nav stripped) for thin-content and near-duplicate checks.
  const mainHtml = (html.match(/<main[\s\S]*?<\/main>/) || [html])[0];
  const words = mainHtml
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<nav[\s\S]*?<\/nav>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .toLowerCase()
    .replace(/[^a-z0-9 ]+/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  bodies.set(path, words);
  if (words.length < 250 && groupOf.get(path) !== "pages") warn(path, `thin main content (${words.length} words)`);
  for (const [m, v] of [[titles, title], [descs, desc], [h1s, h1[0]?.[1]]]) {
    if (!v) continue;
    m.set(v, [...(m.get(v) || []), path]);
  }
  // headings skip
  let last = 1;
  for (const m of html.matchAll(/<h([1-6])[\s>]/g)) {
    const lvl = Number(m[1]);
    if (lvl > last + 1) warn(path, `heading skip h${last}→h${lvl}`);
    last = lvl;
  }
  // images alt
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt="/.test(m[0])) err(path, "img without alt");
  // JSON-LD
  const defined = new Set();
  const referenced = new Set();
  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    let data;
    try {
      data = JSON.parse(m[1]);
    } catch {
      err(path, "invalid JSON-LD");
      continue;
    }
    const walk = (n, top) => {
      if (Array.isArray(n)) return n.forEach((x) => walk(x, top));
      if (n && typeof n === "object") {
        if (n["@id"]) (top || Object.keys(n).length > 1 ? defined : referenced).add(n["@id"]);
        if (n.aggregateRating || n.review) err(path, "rating/review markup");
        for (const [k, v] of Object.entries(n)) if (k !== "@id") walk(v, false);
      }
    };
    walk(data["@graph"] || data, true);
    if (/"FAQPage"/.test(m[1])) {
      for (const q of JSON.parse(m[1])["@graph"].flatMap((n) => n.mainEntity || [])) {
        if (q.name && !text.includes(q.name.replace(/&/g, "&amp;").slice(0, 30).replace(/'/g, "&#x27;")) && !text.includes(q.name.slice(0, 30))) warn(path, `FAQ not visible: ${q.name.slice(0, 40)}`);
      }
    }
  }
  for (const id of referenced) if (!defined.has(id)) err(path, `dangling @id ${id}`);
  // internal links
  const out = new Set();
  for (const m of html.matchAll(/<a[^>]+href="(\/[^"#?]*)/g)) out.add(m[1]);
  links.set(path, out);
}
for (const [m, label] of [[titles, "title"], [descs, "description"], [h1s, "h1"]])
  for (const [v, ps] of m) if (ps.length > 1) err(ps.join(", "), `duplicate ${label}: ${v.slice(0, 50)}`);

// 2b. Content differentiation: 5-word shingles compared between sibling pages of the same sitemap group.
// Jaccard >= 0.5 is a near-duplicate (error); >= 0.35 is a warning. "Unique share" = shingles found on no sibling.
const shingles = new Map();
for (const [p, w] of bodies) {
  const set = new Set();
  for (let i = 0; i + 5 <= w.length; i++) set.add(w.slice(i, i + 5).join(" "));
  shingles.set(p, set);
}
const diff = [];
for (const g of new Set(groupOf.values())) {
  if (g === "pages") continue;
  const peers = urls.filter((u) => groupOf.get(u) === g && shingles.has(u));
  for (let i = 0; i < peers.length; i++) {
    const a = shingles.get(peers[i]);
    let maxJ = 0;
    let maxWith = "";
    const others = new Set();
    for (let j = 0; j < peers.length; j++) {
      if (i === j) continue;
      const b = shingles.get(peers[j]);
      let inter = 0;
      for (const x of a) if (b.has(x)) {
        inter++;
        others.add(x);
      }
      const jac = inter / (a.size + b.size - inter || 1);
      if (jac > maxJ) [maxJ, maxWith] = [jac, peers[j]];
    }
    const unique = a.size ? 1 - others.size / a.size : 1;
    diff.push({ path: peers[i], group: g, maxJ, maxWith, unique });
    if (maxJ >= 0.5) err(peers[i], `near-duplicate of ${maxWith} (Jaccard ${maxJ.toFixed(2)})`);
    else if (maxJ >= 0.35) warn(peers[i], `similar to ${maxWith} (Jaccard ${maxJ.toFixed(2)})`);
    const isHub = ["/resources/", "/roofing-services/", "/locations/"].includes(peers[i]);
    if (!isHub && unique < 0.3 && peers.length > 1) warn(peers[i], `only ${(unique * 100).toFixed(0)}% unique content vs. siblings`);
  }
}

// 2c. Internal links must resolve with 200 directly (no redirects, no 404s).
const allTargets = new Set([...links.values()].flatMap((s) => [...s]));
for (const t of allTargets) {
  if (urls.includes(t) || t.startsWith("/og/") || t.startsWith("/api/") || t.startsWith("/_next/")) continue;
  const { res } = await get(t);
  if (res.status !== 200) err(t, `internal link returns ${res.status}`);
}

// 3. orphans + click depth (BFS from home)
const depth = new Map([["/", 0]]);
const queue = ["/"];
while (queue.length) {
  const p = queue.shift();
  for (const l of links.get(p) || []) if (!depth.has(l) && urls.includes(l)) {
    depth.set(l, depth.get(p) + 1);
    queue.push(l);
  }
}
for (const u of urls) {
  if (!depth.has(u)) err(u, "orphan (unreachable from home)");
  else if (depth.get(u) > 3) err(u, `click depth ${depth.get(u)}`);
}
const maxDepth = Math.max(...depth.values());

// 4. behavior checks
const nf = await get("/definitely-not-a-page/");
if (nf.res.status !== 404) err("/definitely-not-a-page/", `soft 404 (status ${nf.res.status})`);
const slash = await get("/about");
if (![301, 308].includes(slash.res.status)) err("/about", "no trailing-slash redirect");
const param = await get("/about/?utm_source=x");
if (toPath(attr(param.text, /<link rel="canonical" href="([^"]*)"/) || "http://x/") !== "/about/") err("/about/?utm_source=x", "param canonical wrong");
for (const p of ["/lp/roof-repair/", "/request-service/", "/thank-you/"]) {
  const { res, text } = await get(p);
  if (!/noindex/.test(text) || !/noindex/.test(res.headers.get("x-robots-tag") || "")) err(p, "missing noindex meta or header");
}
const kw = await get("/lp/roof-repair/?kw=%3Cscript%3Ealert(1)%3C/script%3E");
if (/<script>alert/.test(kw.text)) err("/lp/roof-repair/", "kw reflected");
const llms = (await get("/llms.txt")).text;
for (const u of urls) if (!llms.includes(u === "/" ? "](" : u)) err("/llms.txt", `missing ${u}`);
// Moved URLs redirect in one hop to a 200 page.
for (const [from, to] of [
  ["/roofing-services/metal-roofing/", "/roofing-services/roof-replacement/metal-roofing/"],
  ["/roofing-services/hail-damage-roof-repair/", "/roofing-services/storm-damage-roof-repair/hail-damage-roof-repair/"],
  ["/emergency-roof-repair/", "/roofing-services/roof-repair/emergency-roof-repair/"],
  ["/resources/roof-insurance-claim-texas/", "/resources/how-roof-insurance-claims-work/"],
]) {
  const { res } = await get(from);
  const loc = res.headers.get("location") || "";
  if (![301, 308].includes(res.status) || !loc.endsWith(to)) err(from, `expected redirect to ${to}, got ${res.status} ${loc}`);
  else if ((await get(to)).res.status !== 200) err(to, "redirect target not 200");
}
// Coverage API: national ZIP index stays server-side.
const covOk = await (await fetch(BASE + "/api/coverage/?zip=77008")).json();
if (!covOk.ok) err("/api/coverage", "known covered ZIP 77008 not found");
if ((await fetch(BASE + "/api/coverage/?zip=abc")).status !== 400) err("/api/coverage", "bad ZIP not rejected");
const cross = await fetch(BASE + "/api/lead", { method: "POST", headers: { "content-type": "application/json", origin: "https://evil.example" }, body: "{}" });
if (cross.status !== 403) err("/api/lead", `cross-origin not rejected (${cross.status})`);

const byGroup = [...new Set(groupOf.values())].map((g) => `${g} ${urls.filter((u) => groupOf.get(u) === g).length}`).join(" · ");
console.log(`Audited ${urls.length} sitemap URLs (${byGroup}) · max click depth ${maxDepth}`);
for (const g of [...new Set(diff.map((d) => d.group))]) {
  const rows = diff.filter((d) => d.group === g);
  const worst = rows.reduce((a, b) => (b.maxJ > a.maxJ ? b : a));
  const minUnique = rows.reduce((a, b) => (b.unique < a.unique ? b : a));
  console.log(`  ${g}: max sibling similarity ${worst.maxJ.toFixed(2)} (${worst.path}) · lowest unique share ${(minUnique.unique * 100).toFixed(0)}% (${minUnique.path})`);
}
if (warns.length) console.log(`\nWarnings (${warns.length}):\n  ` + warns.join("\n  "));
console.log(errors.length ? `\nErrors (${errors.length}):\n  ` + errors.join("\n  ") : "\n0 errors");
process.exit(errors.length ? 1 : 0);
