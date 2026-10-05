# Strategy: Ridgewise Roofing (national, 2026-10-05)

## Brand and market
- **Brand:** Ridgewise Roofing. A neutral national name: "ridge" for the roof line, "wise" for a guide-led site. `ridgewiseroofing.com` returned RDAP 404. The site launched as Bayou Ridge Roofing (Houston).
- **Coverage:** LeadSmart Roofing (Call), 27,250 ZIPs in all 50 states + DC.
- **Highest-payout areas (rollout priority for city pages):**
  - Houston metro ($166.25, done)
  - North and Central NJ (up to $170)
  - Los Angeles, Orange and Ventura counties (~$139)
  - Bay Area ($110–122)
  - Delaware and Philadelphia suburbs (~$102)

## Intent → URL map (cannibalization control)

| Intent | URL |
|---|---|
| Brand / "roofer near me" / national | `/` |
| "roofing in {state}" / "{state} roofer license" | `/locations/{state}/` |
| "roofer {city}" (Houston area) | `/locations/texas/{city}/` |
| "{service} {city}" with a real local angle | `/locations/texas/{city}/{service}/` (3 so far) |
| "roof repair" | `/roofing-services/roof-repair/` |
| "roof leak repair" / "emergency roof tarp" / "ice dam removal" | `/roofing-services/roof-repair/{sub}/` |
| "storm damage roof" | `/roofing-services/storm-damage-roof-repair/` |
| "hail damage roof" / "hurricane roof repair" / "roof insurance claim inspection" | `/roofing-services/storm-damage-roof-repair/{sub}/` |
| "roof replacement" | `/roofing-services/roof-replacement/` |
| "asphalt / Class 4 / metal / tile roofing" | `/roofing-services/roof-replacement/{sub}/` |
| "flat roof repair" / "roof coating" | `/roofing-services/flat-roof-repair/` (+ `/roof-coatings/`) |
| "roof inspection" / "roof maintenance" | `/roofing-services/roof-inspection/` (+ `/roof-maintenance/`) |
| "how do roof insurance claims work" (informational) | `/resources/how-roof-insurance-claims-work/` |
| "how long does a roof last" | `/resources/how-long-does-a-roof-last/` |
| "how much does a new roof cost" | `/resources/roof-replacement-cost-factors/` (factors only, no prices) |
| "roof leaking what to do" | `/resources/roof-leaking-what-to-do/` |
| ice dams / wildfire roofs / FORTIFIED (informational) | matching `/resources/` guide |

**Rules.**

- Emergency intent is owned by the emergency subservice page; the old `/emergency-roof-repair/` hub now redirects to it.
- Commercial intent goes to service pages; informational intent goes to guides.
- Before adding a URL, check this table.

## Page systems
- **State hubs:** written per state:
  - intro
  - 3–5 state conditions
  - licensing and permit notes that name the agency
  - FAQs
  - hazard-matched services and guides
  - neighbors
  - top covered communities from real coverage data
- **City pages:** written per city (local housing, storms, permits, insurance). Gated at 180 local words.
- **Hazard model:** `src/content/risks.ts` maps hail, hurricane, wind, snow, wildfire, heat and rain to services and guides. It drives Location ↔ Service ↔ Problem links.

## PPC
- `/lp/roof-repair/`, `/lp/storm-damage/` (`?kw=` whitelist: hail, hurricane, insurance) and `/lp/roof-replacement/`. All are noindex, with canonicals pointing to the organic pages.
- Target by storm footprint and the high-payout areas above.
