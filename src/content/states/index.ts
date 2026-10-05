import type { CensusRegion, State } from "../types";
import { northeast } from "./northeast";
import { midwest } from "./midwest";
import { south } from "./south";
import { west } from "./west";
import { stateDepth } from "./depth";

// All 50 states + Washington, D.C.
export const usaStates: State[] = [...northeast, ...midwest, ...south, ...west]
  .map((s) => ({ ...s, details: [...s.details, ...(stateDepth[s.slug] ?? [])] }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const censusRegions: CensusRegion[] = ["Northeast", "Midwest", "South", "West"];
