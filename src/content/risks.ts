import type { IconName, Risk } from "./types";

// Hazard -> the services and guides that answer it. State hubs and service pages use this to link
// Location <-> Service <-> Problem without generic boilerplate.
export const RISKS: Record<Risk, { label: string; icon: IconName; services: string[]; guides: string[] }> = {
  hail: { label: "Hail", icon: "hail", services: ["hail-damage-roof-repair", "impact-resistant-shingles", "roof-insurance-claims"], guides: ["how-to-spot-hail-damage-on-a-roof", "are-class-4-shingles-worth-it"] },
  hurricane: { label: "Hurricanes & tropical storms", icon: "storm", services: ["wind-damage-roof-repair", "emergency-roof-repair", "roof-insurance-claims"], guides: ["roof-checklist-after-hurricane", "fortified-roof-hurricane"] },
  wind: { label: "High wind & severe storms", icon: "wind", services: ["storm-damage-roof-repair", "wind-damage-roof-repair", "roof-repair"], guides: ["roof-checklist-after-hurricane", "repair-or-replace-roof"] },
  snow: { label: "Snow & ice dams", icon: "drop", services: ["ice-dam-removal", "roof-ventilation", "metal-roofing"], guides: ["ice-dams-what-to-do", "hot-attic-roof-ventilation"] },
  wildfire: { label: "Wildfire", icon: "alert", services: ["metal-roofing", "tile-roofing", "roof-inspection"], guides: ["wildfire-resistant-roofing"] },
  heat: { label: "Heat & intense sun", icon: "sun", services: ["roof-ventilation", "tile-roofing", "roof-coatings"], guides: ["hot-attic-roof-ventilation", "how-long-does-a-roof-last"] },
  rain: { label: "Heavy rain & moss", icon: "drop", services: ["roof-leak-repair", "flashing-chimney-repair", "roof-maintenance"], guides: ["roof-leaking-what-to-do", "black-streaks-on-roof"] },
};

/** Which hazards a service answers (reverse of RISKS), used to point service pages at the states where it matters most. */
export function risksForService(slug: string): Risk[] {
  return (Object.keys(RISKS) as Risk[]).filter((r) => RISKS[r].services.includes(slug));
}
