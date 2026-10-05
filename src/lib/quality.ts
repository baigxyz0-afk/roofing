import "server-only";
import type { City, CityService, State } from "@/content/types";
import { getService } from "@/content/services";
import { cityBySlug, cities } from "@/content/locations";

// Programmatic-SEO quality gate. Fix failures by writing real local content, never by lowering thresholds.
const words = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").split(/\s+/).filter(Boolean).length;

export function cityQuality(c: City) {
  const localWords =
    words(c.intro) + words(c.housingNotes) + c.localIssues.reduce((n, i) => n + words(i.body), 0) + words(c.storm) + words(c.permits);
  const reasons: string[] = [];
  if (localWords < 180) reasons.push(`local copy ${localWords} < 180 words`);
  if (c.localIssues.length < 2) reasons.push("fewer than 2 local issues");
  if (c.zips.length < 1) reasons.push("no ZIPs");
  if (c.popularServices.filter((s) => getService(s)).length < 3) reasons.push("fewer than 3 services");
  // Sideways links: nearby city pages when the state has others; a state's only city page links to its state hub instead.
  const siblings = cities.filter((x) => x.stateSlug === c.stateSlug && x.slug !== c.slug).length;
  if (siblings > 0 && c.nearby.length < 1) reasons.push("no nearby links");
  if (c.nearby.some((n) => !cityBySlug(n))) reasons.push("nearby link to unknown city");
  return { ok: reasons.length === 0 && c.status === "PUBLISHED", localWords, reasons };
}

export function cityServiceQuality(cs: CityService) {
  const localWords = cs.localAngle.reduce((n, p) => n + words(p), 0) + words(cs.answer);
  const parent = cityBySlug(cs.citySlug);
  const reasons: string[] = [];
  if (localWords < 90) reasons.push(`local copy ${localWords} < 90 words`);
  if (!parent || !cityQuality(parent).ok) reasons.push("parent city not published");
  if (!getService(cs.serviceSlug)) reasons.push("unknown service");
  return { ok: reasons.length === 0 && cs.status === "PUBLISHED", localWords, reasons };
}

// State hubs: written state-specific copy (not generated), at least 3 state conditions, licensing notes and FAQs,
// plus real network coverage in the state. Fails -> no page, no sitemap entry.
export function stateQuality(st: State, zipsInNetwork: number) {
  const localWords = words(st.intro) + st.details.reduce((n, d) => n + words(d.body), 0) + words(st.rules);
  const reasons: string[] = [];
  if (localWords < 150) reasons.push(`state copy ${localWords} < 150 words`);
  if (st.details.length < 3) reasons.push("fewer than 3 state conditions");
  if (st.faqs.length < 2) reasons.push("fewer than 2 FAQs");
  if (st.risks.length < 1) reasons.push("no hazards mapped");
  if (zipsInNetwork < 1) reasons.push("no network coverage");
  return { ok: reasons.length === 0 && st.status === "PUBLISHED", localWords, reasons };
}
