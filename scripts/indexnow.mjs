// Notify Bing (and the IndexNow network) about URLs. Needs INDEXNOW_KEY and public/<key>.txt containing the key.
// INDEXNOW_KEY=... npm run indexnow             -> every URL in the sitemaps
// INDEXNOW_KEY=... npm run indexnow -- /a/ /b/  -> only those paths
// SITEMAP_BASE=http://localhost:3104 reads the sitemaps from a local build (useful if the live site challenges bots).
const SITE = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.ridgewiseroofing.com").replace(/\/$/, "");
const ENDPOINT = process.env.INDEXNOW_ENDPOINT || "https://www.bing.com/indexnow";
const key = process.env.INDEXNOW_KEY;
if (!key) {
  console.error("Set INDEXNOW_KEY and add public/<key>.txt first.");
  process.exit(1);
}
const SOURCE = (process.env.SITEMAP_BASE || SITE).replace(/\/$/, "");
const toSite = (u) => SITE + new URL(u).pathname;
let urls = process.argv.slice(2).map((p) => SITE + p);
if (!urls.length) {
  const index = await fetch(`${SOURCE}/sitemap.xml`).then((r) => r.text());
  for (const sm of index.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const x = await fetch(SOURCE + new URL(sm[1]).pathname).then((r) => r.text());
    urls.push(...[...x.matchAll(/<url><loc>([^<]+)<\/loc>/g)].map((m) => toSite(m[1])));
  }
}
urls = [...new Set(urls)];
if (!urls.length) {
  console.error("No URLs found (is the sitemap reachable?).");
  process.exit(1);
}
// IndexNow accepts up to 10,000 URLs per request.
for (let i = 0; i < urls.length; i += 10000) {
  const batch = urls.slice(i, i + 10000);
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(SITE).host, key, keyLocation: `${SITE}/${key}.txt`, urlList: batch }),
  });
  console.log(`${ENDPOINT} -> HTTP ${res.status} for ${batch.length} URLs ${await res.text()}`);
}
