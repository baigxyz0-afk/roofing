import type { Faq, LandingPage, Review } from "./types";
import { SERVICE_PARENT } from "./serviceTree";

// Content dates for sitemap lastmod. Never the build time.
export const dates = {
  site: "2026-10-05",
  services: "2026-10-05",
  locations: "2026-10-05",
  guides: "2026-10-05",
  legal: "2026-10-05",
};

// Only real, verified reviews. Empty until the Google Business Profile collects them.
export const reviews: Review[] = [];

export const redirects: { source: string; destination: string; permanent: boolean }[] = [
  { source: "/services/", destination: "/roofing-services/", permanent: true },
  { source: "/service-areas/", destination: "/locations/", permanent: true },
  { source: "/blog/", destination: "/resources/", permanent: true },
  { source: "/emergency/", destination: "/roofing-services/roof-repair/emergency-roof-repair/", permanent: true },
  { source: "/emergency-roof-repair/", destination: "/roofing-services/roof-repair/emergency-roof-repair/", permanent: true },
  // Subservices moved under their parent service (2026-10-05).
  ...Object.entries(SERVICE_PARENT).map(([child, parent]) => ({ source: `/roofing-services/${child}/`, destination: `/roofing-services/${parent}/${child}/`, permanent: true })),
  // Guides made national (2026-10-05).
  { source: "/resources/roof-insurance-claim-texas/", destination: "/resources/how-roof-insurance-claims-work/", permanent: true },
  { source: "/resources/how-long-does-a-roof-last-houston/", destination: "/resources/how-long-does-a-roof-last/", permanent: true },
];

export const generalFaqs: Faq[] = [
  { q: "How does Ridgewise Roofing work?", a: "You call or send a request, and we connect you with an independent local roofing contractor who serves your ZIP code. The contractor inspects, quotes and performs the work directly with you." },
  { q: "Is Ridgewise Roofing a roofing company?", a: "No. We're a referral service. The roofers in our network are independent businesses responsible for their own insurance, pricing, permits and work." },
  { q: "What areas do you cover?", a: "Our contractor network covers ZIP codes in all 50 states and Washington, D.C. Coverage within a state depends on which contractors serve each ZIP code, so check yours with the ZIP checker on the locations page." },
  { q: "Does it cost anything to request a roof inspection?", a: "Requesting service through us is free. Many roofers inspect storm damage at no charge; written reports for real estate or insurance may carry a fee, which the contractor tells you upfront." },
  { q: "How do I check out a roofer?", a: "Rules vary by state: some license or register roofers, some leave it to cities, and some have no roofing license. Your state page explains what applies. Everywhere, ask for a certificate of liability insurance, a local business address and references, and never pay in full before work starts." },
  { q: "Can you help with my insurance claim?", a: "The roofer you're connected with can inspect, document damage and meet your adjuster. In most states, only you, an attorney or a licensed public adjuster can negotiate the claim itself." },
];

export const problems = [
  { symptom: "Water dripping through the ceiling", cause: "Failed pipe boot, flashing or storm damage", service: "roof-leak-repair", guide: "roof-leaking-what-to-do" },
  { symptom: "Shingles in the yard after a storm", cause: "Wind broke the seal strips or nails pulled", service: "wind-damage-roof-repair", guide: "roof-checklist-after-hurricane" },
  { symptom: "Dented gutters and vents after hail", cause: "Hail likely bruised the shingles too", service: "hail-damage-roof-repair", guide: "how-to-spot-hail-damage-on-a-roof" },
  { symptom: "Tree or limb on the roof", cause: "Storm damage needing tarping first", service: "emergency-roof-repair", guide: "roof-checklist-after-hurricane" },
  { symptom: "Black streaks or moss on the shingles", cause: "Algae or moss on damp, shaded slopes", service: "roof-maintenance", guide: "black-streaks-on-roof" },
  { symptom: "Upstairs rooms always hot", cause: "Poor attic ventilation or blocked soffits", service: "roof-ventilation", guide: "hot-attic-roof-ventilation" },
  { symptom: "Curling shingles and granules in gutters", cause: "Roof nearing the end of its life", service: "roof-replacement", guide: "repair-or-replace-roof" },
  { symptom: "Insurer asking about your roof's age", cause: "Older roofs trigger renewal reviews", service: "roof-inspection", guide: "how-long-does-a-roof-last" },
  { symptom: "Ice along the eaves, leaks during thaws", cause: "Ice dams from attic heat loss", service: "ice-dam-removal", guide: "ice-dams-what-to-do" },
];

export const landingPages: LandingPage[] = [
  {
    slug: "roof-repair",
    service: "roof-repair",
    canonical: "/roofing-services/roof-repair/",
    headline: "Roof leaking or missing shingles? Talk to a local roofer",
    sub: "Leaks, wind-lifted shingles and failed flashing. Get connected with an independent local roofer who finds the cause and quotes before any work.",
    bullets: ["Inspection of the roof and attic", "Written price before repairs", "Independent local roofing contractors"],
    signs: ["Ceiling stains or drips", "Shingles in the yard", "Cracked pipe boots or loose flashing"],
    expect: ["A short call about what's happening", "Connection with a roofer serving your ZIP", "Inspection, photos and a written quote"],
    faqs: [{ q: "How fast can a roofer come out?", a: "It depends on the day and storm demand. Many requests are inspected the same or next day." }],
    kw: { "leak": "Roof leaking? Get a roofer out fast", "shingles": "Missing shingles? Get them fixed before the next storm", "ice-dam": "Ice dam leaking into your home? Get help now" },
  },
  {
    slug: "storm-damage",
    service: "storm-damage-roof-repair",
    canonical: "/roofing-services/storm-damage-roof-repair/",
    headline: "Storm damage? Get your roof inspected and documented",
    sub: "Hail, hurricane winds or fallen limbs. Get connected with a local roofer who inspects, photographs the damage and meets your adjuster.",
    bullets: ["Dated photo documentation", "Help meeting the insurance adjuster", "Emergency tarping when needed"],
    signs: ["Missing or creased shingles", "Dented gutters and vents", "Limbs on the roof"],
    expect: ["Quick questions by phone", "A roofer serving your ZIP", "Inspection and a written report"],
    faqs: [{ q: "Can the roofer pay my deductible?", a: "No. Paying the deductible is your obligation, and several states, including Texas, Colorado and Minnesota, prohibit contractors from waiving or rebating it." }],
    kw: { "hail": "Hail damage? Get a free roof inspection", "hurricane": "Hurricane roof damage? Get it tarped and inspected", "insurance": "Roof insurance claim? Start with an inspection" },
  },
  {
    slug: "roof-replacement",
    service: "roof-replacement",
    canonical: "/roofing-services/roof-replacement/",
    headline: "Replace your roof the right way",
    sub: "Aging, storm-damaged or leaking in several places? Get a written, itemized quote from a local roofer.",
    bullets: ["Full tear-off and decking check", "New underlayment, flashing and vents", "Architectural, Class 4 or metal options"],
    signs: ["Roof 15 or more years old", "Curling or cracked shingles", "Repeated leaks"],
    expect: ["A call about your home", "On-site measurement", "Itemized written options"],
    faqs: [{ q: "How long does a roof replacement take?", a: "Most homes are done in one to two days, weather permitting." }],
    kw: { "class-4": "Class 4 impact-resistant roof replacement", "metal": "Thinking about a metal roof? Get a quote", "new-roof": "New roof: get a written, itemized quote" },
  },
];

export function getLanding(slug: string) {
  return landingPages.find((l) => l.slug === slug);
}
