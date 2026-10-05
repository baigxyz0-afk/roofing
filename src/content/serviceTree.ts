// Parent -> subservice relationships. Tiny on purpose: routes.ts imports it, and routes ship to the client.
// A subservice gets its own page at /roofing-services/{parent}/{slug}/ only when it has independent search intent.
export const SERVICE_PARENT: Record<string, string> = {
  "roof-leak-repair": "roof-repair",
  "emergency-roof-repair": "roof-repair",
  "ice-dam-removal": "roof-repair",
  "hail-damage-roof-repair": "storm-damage-roof-repair",
  "wind-damage-roof-repair": "storm-damage-roof-repair",
  "roof-insurance-claims": "storm-damage-roof-repair",
  "asphalt-shingle-roofing": "roof-replacement",
  "impact-resistant-shingles": "roof-replacement",
  "metal-roofing": "roof-replacement",
  "tile-roofing": "roof-replacement",
  "roof-coatings": "flat-roof-repair",
  "roof-maintenance": "roof-inspection",
};

export function childrenOf(parent: string) {
  return Object.entries(SERVICE_PARENT)
    .filter(([, p]) => p === parent)
    .map(([c]) => c);
}
