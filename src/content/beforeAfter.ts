import type { Photo } from "./photos";

// Before/after pairs. Stock examples (Pexels), always labelled "not our jobs".
// Swap in real job photos, with homeowner consent, as they come in.
export type BeforeAfter = {
  slug: string;
  title: string;
  body: string;
  services: string[];
  before: Photo;
  after: Photo;
};

const p = (name: string, alt: string): Photo => ({ src: `/photos/${name}.webp`, w: 1200, h: 800, alt });

export const beforeAfter: BeforeAfter[] = [
  {
    slug: "worn-shingles-to-new-roof",
    title: "Worn, broken shingles replaced with a new shingle roof",
    body: "Brittle, curling shingles lose their seal and break in the next storm. A full tear-off exposes the decking for repair, and new shingles go down with fresh underlayment and flashing.",
    services: ["roof-replacement", "asphalt-shingle-roofing", "roof-repair", "impact-resistant-shingles"],
    before: p("before-worn-roof", "Old roof with broken, weathered shingles"),
    after: p("after-new-shingle-roof", "Roofer installing new asphalt shingles"),
  },
  {
    slug: "storm-damage-to-restored-roof",
    title: "Storm-damaged roof restored",
    body: "Wind and falling debris tear roofs open at the edges first. After tarping and an insurance inspection, the damaged sections are rebuilt with new decking, underlayment and wind-rated shingles.",
    services: ["storm-damage-roof-repair", "wind-damage-roof-repair", "emergency-roof-repair", "roof-insurance-claims"],
    before: p("before-storm-damaged-house", "House with a storm-damaged tile roof and debris in the yard"),
    after: p("after-clean-roofline", "Clean, intact gable roofs against a blue sky"),
  },
  {
    slug: "sagging-roof-to-metal",
    title: "Sagging, worn roof replaced with standing seam metal",
    body: "A sagging ridge usually means soft decking or failed framing underneath. Replacing the deck and finishing in metal gives a roof that sheds snow and lasts for decades.",
    services: ["metal-roofing", "roof-replacement", "fascia-soffit-repair"],
    before: p("before-sagging-barn-roof", "Old barn with a sagging, patched roof"),
    after: p("after-metal-roof", "Dark standing seam metal roof with a skylight"),
  },
  {
    slug: "moss-covered-to-new-shingles",
    title: "Moss-covered roof replaced with new shingles",
    body: "Moss holds water against the roof and lifts shingles. When it has been there for years, the shingles underneath are usually spent, and a re-roof with algae-resistant shingles is the fix.",
    services: ["roof-maintenance", "asphalt-shingle-roofing", "roof-replacement"],
    before: p("before-moss-roof", "Roof edge thick with green moss"),
    after: p("after-new-shingles-closeup", "Roofers laying new architectural shingles over fresh underlayment"),
  },
];

export function beforeAfterFor(serviceSlug: string) {
  return beforeAfter.filter((b) => b.services.includes(serviceSlug));
}
