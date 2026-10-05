import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { DISCLOSURE } from "@/content/site";
import { SimplePage } from "@/components/SimplePage";

const path = routes.terms();
export const metadata = pageMeta({ title: "Terms of Use", description: "Terms for using the Ridgewise Roofing website and referral service, including the role of the independent roofing contractors in our network.", path });

export default function Terms() {
  return (
    <SimplePage title="Terms of Use" crumbs={[{ name: "Home", path: "/" }, { name: "Terms", path }]} lead="Last updated October 5, 2026. Draft pending legal review.">
      <h2>Referral service</h2>
      <p>{DISCLOSURE}</p>
      <h2>No guarantee of availability</h2>
      <p>Coverage and response times depend on which contractors are active in your area. Submitting a request doesn't guarantee a contractor will be available.</p>
      <h2>Contractor work</h2>
      <p>Any agreement for roofing work is between you and the contractor. The contractor is responsible for pricing, licensing where required, permits, inspections, insurance, workmanship and warranties.</p>
      <h2>Information on this site</h2>
      <p>Guides are general information for homeowners and aren't a substitute for an on-site inspection or advice from your insurer, adjuster or attorney. Stay off damaged roofs, and report downed power lines to 911 and your utility.</p>
    </SimplePage>
  );
}
