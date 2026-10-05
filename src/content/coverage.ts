import "server-only";
import zips from "@/data/coverage-zips.json";
import states from "@/data/coverage-states.json";

// LeadSmart Roofing (Call) coverage for all 50 states + DC (data date 2026-10-04).
// Built by scripts/build-coverage.mjs. Server-only: the 27k-ZIP index never ships to the browser;
// the ZIP checker and lead form query /api/coverage instead. Payouts are never rendered.

export const coverageDate = "2026-10-04";

export type StateCoverage = { zips: number; cities: number; topCities: { city: string; county: string | null; zips: number }[]; maxPayout: number };

const ZIPS = zips as unknown as Record<string, [string, string]>;
const STATES = states as unknown as Record<string, StateCoverage>;

export function zipCoverage(zip: string) {
  const hit = ZIPS[zip];
  return hit ? { city: hit[0], state: hit[1] } : null;
}

export function stateCoverage(abbr: string): StateCoverage | null {
  return STATES[abbr] ?? null;
}

export function nationalCoverage() {
  const all = Object.values(STATES);
  return { states: all.length, zips: all.reduce((n, s) => n + s.zips, 0), cities: all.reduce((n, s) => n + s.cities, 0) };
}
