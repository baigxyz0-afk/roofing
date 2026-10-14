import "server-only";
import type { Risk, State } from "./types";
import { generatedCities, generatedIndexable, type GeneratedCity } from "./generatedCities";
import flagged from "@/data/cities-noindex.json";

// Wave 6 (2026-10-14): service + city and subservice + city pages for indexable data-driven cities.
// Each city gets the two universal high-intent services plus the subservice that answers its state's
// top hazard. Pages the audit flags as near-duplicates (same service, same state) are kept noindex.
const FLAGGED = new Set(flagged as string[]);

export const UNIVERSAL = ["roof-repair", "roof-replacement"] as const;

/** The subservice that answers each hazard most directly. */
export const HAZARD_SERVICE: Record<Risk, string> = {
  hail: "hail-damage-roof-repair",
  hurricane: "wind-damage-roof-repair",
  wind: "storm-damage-roof-repair",
  snow: "ice-dam-removal",
  wildfire: "metal-roofing",
  heat: "roof-ventilation",
  rain: "roof-leak-repair",
};

/** Why a homeowner in this state calls for this service: tied to a real state hazard, never invented. */
export const HAZARD_REASON: Record<Risk, string> = {
  hail: "hail that bruises shingles without obvious leaks",
  hurricane: "hurricane and tropical-storm winds that strip roof edges first",
  wind: "severe-storm winds that lift shingles and drop limbs",
  snow: "snow and freeze-thaw cycles that build ice dams at the eaves",
  wildfire: "wildfire embers, which noncombustible roofing resists",
  heat: "heat and sun that bake shingles from above and below",
  rain: "heavy rain that finds failed flashing and pipe boots",
};

export function combosForCity(c: GeneratedCity, st: State): string[] {
  const hazard = HAZARD_SERVICE[st.risks[0]];
  return [...new Set([...UNIVERSAL, hazard])];
}

export function comboPath(c: GeneratedCity, service: string) {
  return `/locations/${c.stateSlug}/${c.slug}/${service}/`;
}

export function comboIndexable(c: GeneratedCity, service: string) {
  return generatedIndexable(c) && !FLAGGED.has(comboPath(c, service));
}

/** All generated combos (only for cities that are themselves indexable). */
export function allCombos(states: State[]) {
  const bySlug = new Map(states.map((s) => [s.slug, s]));
  const out: { c: GeneratedCity; st: State; service: string }[] = [];
  for (const c of generatedCities) {
    const st = bySlug.get(c.stateSlug);
    if (!st || !generatedIndexable(c)) continue;
    for (const service of combosForCity(c, st)) out.push({ c, st, service });
  }
  return out;
}
