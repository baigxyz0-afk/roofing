import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { DISCLOSURE, site } from "@/content/site";
import { JsonLd } from "@/components/ui";
import { SimplePage } from "@/components/SimplePage";
import { CtaBand } from "@/components/CtaBand";

const title = "About Ridgewise Roofing";
const description = "Ridgewise Roofing connects homeowners in all 50 states and D.C. with independent local roofing contractors and publishes plain-language roofing guides.";
const path = routes.about();
export const metadata = pageMeta({ title, description, path });

export default function About() {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "About", path },
  ];
  return (
    <>
      <JsonLd data={graph(pageGraph({ path, name: title, description, type: "AboutPage", crumbs, about: [ids.org] }))} />
      <SimplePage title="About Ridgewise Roofing" crumbs={crumbs} lead="A faster, clearer way to find a roofer, wherever you live.">
        <p>
          The ridge is the line where every roof starts, and being wise about a roof means knowing what your weather does to it. Hail on the Plains, hurricanes on the coasts, ice dams in the North and wildfire and heat in the West each break roofs in different ways, so the advice on this site is written region by region and state by state.
        </p>
        <h2>What we do</h2>
        <p>
          {site.name} is a referral service. When you call or send a request, we connect you with an independent roofing contractor who serves your ZIP code. The roofer inspects the roof, quotes the work, and does the job directly with you.
        </p>
        <p>
          We also publish guides, service pages and state pages written for the conditions homeowners actually face: <Link href={routes.guide("roof-leaking-what-to-do")} className="link">leaks</Link>,{" "}
          <Link href={routes.guide("how-to-spot-hail-damage-on-a-roof")} className="link">hail damage</Link>,{" "}
          <Link href={routes.guide("how-roof-insurance-claims-work")} className="link">insurance claims</Link> and the rest, so you know what you're dealing with before anyone arrives.
        </p>
        <h2>What we don't do</h2>
        <p>
          We don't perform roofing work, employ roofers, or set prices. We don't publish reviews we haven't verified, or claims we can't back up. Licensing rules vary by state, so before hiring anyone, check the license or registration your state requires and ask for a certificate of liability insurance, a local address and references.
        </p>
        <h2>Disclosure</h2>
        <p>{DISCLOSURE}</p>
      </SimplePage>
      <CtaBand />
    </>
  );
}
