# Ridgewise Roofing — Nationwide Roofing Lead-Gen Site

This site was built from the Local Service Lead-Gen Website Playbook (`docs/PLAYBOOK.md`), starting from the Aspenridge HVAC codebase (`D:\denver-hvac`). It launched as a Houston site (Bayou Ridge Roofing) and was expanded nationwide on 2026-10-05, following the Whole-USA SEO Expansion prompt.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind v4 · Zod · sharp.

## Snapshot (2026-10-05)

| | |
|---|---|
| Brand | **Ridgewise Roofing**. `ridgewiseroofing.com` returned RDAP 404 (unregistered). `ridgewise.com` is registered by someone else, so run a trademark check |
| Business model | Call brand / referral for LeadSmart buyers. The disclosure is in `src/content/site.ts` |
| Coverage | LeadSmart Roofing (Call): **27,250 ZIPs in all 50 states + DC** (data date 2026-10-04). Server-only index, queried via `/api/coverage` |
| Services | **21 services in 6 categories**. 9 parent pages and 12 subservice pages at `/roofing-services/{parent}/{sub}/` |
| Locations | USA hub + **51 state hubs** · **31 city pages** in 9 states (Greater Houston 14, plus Dallas, Fort Worth, San Antonio, Austin, Denver, Colorado Springs, Oklahoma City, Tulsa, Atlanta, Minneapolis, Chicago, Philadelphia, Los Angeles, San Diego, Phoenix, Tampa, Miami) · 3 city+service pages. All pass the quality gates |
| Guides | 13 · PPC pages: 3 |
| Indexable URLs | **129** in 6 sitemaps, max click depth 2 |
| Audit | `npm run audit:seo`: **0 errors, 0 warnings**. Max sibling similarity: states 0.24, services 0.25, cities 0.20 (31 cities) |
| Phone | LeadSmart number `(888) 856-2240` (`+18888562240`), set in `src/content/site.ts`; included in schema |

## Architecture

```
/                                         national hub: services, regional hazards, all 51 states
/roofing-services/                        services hub (6 categories)
/roofing-services/{service}/              9 parent services
/roofing-services/{parent}/{sub}/         12 subservices (tree in src/content/serviceTree.ts)
/locations/                               USA hub: 51 states by Census region + ZIP checker
/locations/{state}/                       state hubs (src/content/states/*.ts + depth.ts)
/locations/{state}/{city}/                31 city pages (Houston metro + 17 major metros)
/locations/texas/{city}/{service}/        gated city+service pages
/resources/{guide}/                       13 guides
```

**How the pieces connect.**

- **Hazards (`src/content/risks.ts`):** link states to services and guides. Hail states point to hail repair and Class 4 shingles, snow states to ice dams, and so on.
- **Service pages:** list the states where the service matters most.
- **State hubs:** list the services and guides that match their hazards, their neighboring states, and the top covered communities from the real coverage data.

## Quality controls

- **Quality gates (`src/lib/quality.ts`):**
  - States: at least 150 words of written state copy, 3 or more conditions, FAQs, mapped hazards and real coverage.
  - Cities: at least 180 local words.
  - City+service pages: at least 90 local words.
  - A page that fails is not generated and is left out of the sitemaps.
- **`scripts/seo-audit.mjs`** crawls every sitemap URL and checks:
  - status, canonical, title, description, H1 and heading hierarchy
  - alt text, JSON-LD and `@id` integrity
  - duplicate titles, descriptions and H1s
  - **near-duplicate siblings** (5-word shingles; Jaccard ≥0.5 is an error, ≥0.35 a warning) and **unique content share**
  - thin main content
  - **internal links that redirect or 404**
  - orphans and click depth
  - moved-URL redirects, the coverage API, noindex on landing pages, and `llms.txt`
- **Moved URLs:** every old flat subservice URL, `/emergency-roof-repair/` and the two renamed guides 308-redirect in one hop (`src/content/misc.ts`).

## Run

```bash
npm install
npm run build && npx next start -p 3104
BASE=http://localhost:3104 npm run audit:seo
node scripts/build-coverage.mjs <dir of LeadSmart state shards>   # refresh src/data/coverage-*.json
node scripts/make-brand.mjs && npm run icons
node scripts/fetch-photos.mjs
```

## Expansion waves

- [x] **Wave 1:** national homepage, service hierarchy, national service copy, schema (Country → State), sitemaps, quality checker.
- [x] **Wave 2:** all 50 states + DC hubs with state-specific hazards, licensing and coverage.
- [x] **Wave 3:** city hubs. Greater Houston (14), plus 17 metros chosen from LeadSmart payout and coverage (see Snapshot). Each passed the 180-word local gate with city-specific copy.
  - Next metro candidates: North and Central NJ suburbs, the Bay Area, Las Vegas, Charlotte, Nashville, Kansas City, St. Louis, Omaha, Boston, Seattle.
- [ ] **Wave 4:** city+service pages only where the local angle is real (hail in DFW and Denver, hurricane in Tampa and Miami, ice dams in Minneapolis and Buffalo).
- [ ] **Waves 5–7:** secondary cities, location+subservice pages where justified, more problem and decision guides.

## Before launch

- [ ] Trademark and entity check for "Ridgewise Roofing" (USPTO Class 37). Register the domain.
- [x] LeadSmart phone number added (2026-10-09).
- [ ] Set the lead webhook (`LEAD_WEBHOOK_URL`).
- [ ] **Have the state licensing notes verified** (`rules` in `src/content/states/*.ts`). They were written conservatively and name the agency to check, but each should be confirmed with that state's board before launch.
- [ ] Legal review of Privacy and Terms (the governing-law clause was removed pending your business's state of organization). Confirm SMS consent wording against TCPA.
- [ ] Replace stock photos with real job photos as they come in.
- [ ] Remaining items in playbook A6/B13.
