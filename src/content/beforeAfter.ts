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
];

export function beforeAfterFor(serviceSlug: string) {
  return beforeAfter.filter((b) => b.services.includes(serviceSlug));
}
