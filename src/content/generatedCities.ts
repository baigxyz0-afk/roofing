import "server-only";
import data from "@/data/cities-generated.json";
// Pages the audit flagged as too similar to same-state siblings (scripts/seo-audit.mjs with DUP_OUT). Kept noindex.
import flagged from "@/data/cities-noindex.json";

const FLAGGED = new Set(flagged as string[]);

// Wave 5 (2026-10-12): data-driven city pages for 1,100+ covered communities, built by scripts/build-cities.mjs
// from LeadSmart coverage. Every fact on these pages comes from that data (covered ZIPs, county, real distances)
// or from the state hub. Pages that don't carry enough unique data are generated but kept out of the index.

export type GeneratedCity = {
  slug: string;
  name: string;
  state: string;
  stateSlug: string;
  county: string;
  lat: number;
  lng: number;
  rank: number;
  zips: string[];
  nearbyCovered: { name: string; miles: number; zips: number }[];
  nearbyPages: { name: string; slug: string; miles: number }[];
  nearestGuide: { name: string; slug: string; miles: number } | null;
  /** Real distance and compass direction from the nearest of the state's largest covered cities (within 60 miles). */
  ref: { name: string; miles: number; dir: string } | null;
};

/** Source data uses inconsistent capitalization (e.g. "Mckinney"); fix the common patterns for display. */
export function displayName(name: string) {
  return name.replace(/\bMc([a-z])/g, (_, c: string) => `Mc${c.toUpperCase()}`).replace(/\bDe ([a-z])/g, (_, c: string) => `De ${c.toUpperCase()}`);
}

export const generatedCities: GeneratedCity[] = (data as unknown as GeneratedCity[]).map((c) => ({
  ...c,
  name: displayName(c.name),
  nearbyCovered: c.nearbyCovered.map((n) => ({ ...n, name: displayName(n.name) })),
  nearbyPages: c.nearbyPages.map((n) => ({ ...n, name: displayName(n.name) })),
  ref: c.ref ? { ...c.ref, name: displayName(c.ref.name) } : null,
}));

/** Enough unique, verifiable data to deserve indexing: several covered ZIPs and several nearby covered places. */
export function generatedIndexable(c: GeneratedCity) {
  return c.zips.length >= 2 && c.nearbyCovered.length >= 3 && !FLAGGED.has(`/locations/${c.stateSlug}/${c.slug}/`);
}

export function getGeneratedCity(stateSlug: string, slug: string) {
  return generatedCities.find((c) => c.stateSlug === stateSlug && c.slug === slug);
}

export function generatedInState(stateSlug: string) {
  return generatedCities.filter((c) => c.stateSlug === stateSlug).sort((a, b) => a.name.localeCompare(b.name));
}

// County-level rules we can state with confidence. Everything else is covered at the state level.
const TX_WINDSTORM = ["Aransas", "Brazoria", "Calhoun", "Cameron", "Chambers", "Galveston", "Jefferson", "Kenedy", "Kleberg", "Matagorda", "Nueces", "Refugio", "San Patricio", "Willacy"];
const FL_HVHZ = ["Miami-Dade", "Broward"];

export function countyNote(c: GeneratedCity): string | null {
  if (c.state === "TX" && TX_WINDSTORM.includes(c.county))
    return `${c.county} County is in Texas's designated windstorm area. Roofing work there is inspected so homes stay eligible for Texas Windstorm Insurance Association coverage, so ask the contractor how the inspection will be handled.`;
  if (c.state === "FL" && FL_HVHZ.includes(c.county))
    return `${c.county} County is in Florida's High-Velocity Hurricane Zone, which has the strictest roofing product approval and installation requirements in the state.`;
  return null;
}
