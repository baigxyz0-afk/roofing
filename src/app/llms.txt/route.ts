import { site, DISCLOSURE } from "@/content/site";
import { indexableUrls } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  const urls = indexableUrls();
  const section = (g: string, h: string) =>
    `## ${h}\n\n` + urls.filter((u) => u.group === g).map((u) => `- [${u.title}](${site.url}${u.path})`).join("\n");
  const body = `# ${site.name}

> Nationwide roofing referral service covering all 50 U.S. states and Washington, D.C. Connects homeowners with independent roofing contractors for roof repair and leaks, ice dams, emergency tarping, hail, wind and hurricane damage, insurance claim inspections, roof replacement (asphalt, Class 4, metal, tile), flat roofs, ventilation, flashing and skylights. Each state page covers that state's roofing hazards and contractor licensing rules.

${DISCLOSURE}

${section("services", "Services")}

${section("states", "States")}

${section("cities", "City guides")}

${section("local-services", "Local service guides")}

${section("guides", "Guides")}

${section("pages", "Company")}
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
