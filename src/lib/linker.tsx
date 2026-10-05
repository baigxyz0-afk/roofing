import Link from "next/link";
import type { ReactNode } from "react";
import { routes } from "./routes";

// Contextual internal links: topic -> owning page, first mention only, no self-links, capped per page.
const TOPICS: [RegExp, string][] = [
  [/\bpipe boots?\b|\bvent boots?\b/i, routes.service("roof-leak-repair")],
  [/\btarps?\b|\btarping\b/i, routes.service("emergency-roof-repair")],
  [/\bhail\b/i, routes.service("hail-damage-roof-repair")],
  [/\bClass 4\b|\bimpact-resistant\b/i, routes.service("impact-resistant-shingles")],
  [/\bwindstorm\b|\bTWIA\b/i, routes.service("wind-damage-roof-repair")],
  [/\bice dams?\b/i, routes.service("ice-dam-removal")],
  [/\bFORTIFIED\b/, routes.guide("fortified-roof-hurricane")],
  [/\bClass A\b|\bembers?\b/i, routes.guide("wildfire-resistant-roofing")],
  [/\btiles?\b|\bunderlayment beneath\b/i, routes.service("tile-roofing")],
  [/\bderecho\b|\bBeryl\b|\bhurricanes?\b/i, routes.guide("roof-checklist-after-hurricane")],
  [/\bdeductibles?\b|\badjusters?\b|\binsurance claims?\b/i, routes.guide("how-roof-insurance-claims-work")],
  [/\bstanding seam\b|\bmetal roof(?:ing|s)?\b/i, routes.service("metal-roofing")],
  [/\barchitectural shingles?\b|\bthree-tab\b/i, routes.service("asphalt-shingle-roofing")],
  [/\bmodified bitumen\b|\bTPO\b|\bponding\b/i, routes.service("flat-roof-repair")],
  [/\bsilicone\b|\bcoatings?\b/i, routes.service("roof-coatings")],
  [/\bventilation\b|\bridge vents?\b|\bturbines?\b|\bsoffit vents?\b/i, routes.service("roof-ventilation")],
  [/\bkick-out\b|\bstep flashing\b|\bcounterflashing\b|\bchase caps?\b/i, routes.service("flashing-chimney-repair")],
  [/\bskylights?\b/i, routes.service("skylight-repair")],
  [/\bfascia\b|\bdrip edge\b|\bsquirrels?\b|\broof rats?\b/i, routes.service("fascia-soffit-repair")],
  [/\binspections?\b/i, routes.service("roof-inspection")],
  [/\balgae\b|\bpine needles?\b/i, routes.guide("black-streaks-on-roof")],
  [/\bgranules?\b/i, routes.guide("how-to-spot-hail-damage-on-a-roof")],
  [/\bstorm chasers?\b|\bpublic adjusters?\b/i, routes.guide("how-roof-insurance-claims-work")],
  [/\battic\b/i, routes.guide("hot-attic-roof-ventilation")],
  [/\bre-roofs?\b|\btear-off\b/i, routes.service("roof-replacement")],
];

const EXPLICIT = /\[([^\]]+)\]\(([^)]+)\)/g;

export function createLinker(currentPath: string, max = 6) {
  const used = new Set<string>([currentPath]);
  let count = 0;

  function auto(text: string, keyBase: string): ReactNode[] {
    if (count >= max) return [text];
    for (const [re, href] of TOPICS) {
      if (used.has(href)) continue;
      const m = re.exec(text);
      if (!m) continue;
      used.add(href);
      count++;
      const before = text.slice(0, m.index);
      const after = text.slice(m.index + m[0].length);
      return [
        before,
        <Link key={`${keyBase}-${href}`} href={href} className="link">
          {m[0]}
        </Link>,
        ...auto(after, keyBase + "a"),
      ];
    }
    return [text];
  }

  return function link(text: string): ReactNode[] {
    const out: ReactNode[] = [];
    let last = 0;
    let i = 0;
    for (const m of text.matchAll(EXPLICIT)) {
      out.push(...auto(text.slice(last, m.index), `t${i}`));
      // Content may use a service's short path; resolve it to the canonical (possibly nested) URL.
      const svc = m[2].match(/^\/roofing-services\/([a-z0-9-]+)\/$/);
      const href = svc ? routes.service(svc[1]) : m[2];
      if (href === currentPath) out.push(m[1]);
      else {
        used.add(href);
        count++;
        out.push(
          <Link key={`x${i}`} href={href} className="link">
            {m[1]}
          </Link>,
        );
      }
      last = (m.index ?? 0) + m[0].length;
      i++;
    }
    out.push(...auto(text.slice(last), `t${i}`));
    return out;
  };
}

export function stripLinks(text: string) {
  return text.replace(EXPLICIT, "$1");
}
