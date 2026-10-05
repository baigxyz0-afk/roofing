import { notFound } from "next/navigation";
import { getService, getCategory, parentOf } from "@/content/services";
import { pageMeta } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { graph, ids, pageGraph } from "@/lib/schema";
import { site } from "@/content/site";
import { JsonLd } from "@/components/ui";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

// Shared by /roofing-services/[service]/ and /roofing-services/[service]/[sub]/.
export function serviceMeta(slug: string) {
  const s = getService(slug)!;
  return pageMeta({ title: s.seoTitle, description: s.metaDescription, path: routes.service(s.slug) });
}

export function ServicePageView({ slug }: { slug: string }) {
  const s = getService(slug);
  if (!s || s.status !== "PUBLISHED") notFound();
  const parent = parentOf(s.slug);
  const path = routes.service(s.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: routes.services() },
    ...(parent ? [{ name: parent.name, path: routes.service(parent.slug) }] : []),
    { name: s.name, path },
  ];
  const service: Record<string, unknown> = {
    "@type": "Service",
    "@id": ids.service(s.slug),
    name: s.name,
    url: `${site.url}${path}`,
    description: s.answer,
    serviceType: s.name,
    category: getCategory(s.category).name,
    broker: { "@id": ids.org },
    areaServed: { "@id": ids.country },
  };
  if (parent) service.isRelatedTo = { "@id": ids.service(parent.slug) };
  return (
    <>
      <JsonLd data={graph(pageGraph({ path, name: s.seoTitle, description: s.metaDescription, type: "ItemPage", crumbs, faqs: s.faqs, about: [ids.service(s.slug)], extra: [service] }))} />
      <ServiceTemplate s={s} path={path} crumbs={crumbs} faqs={s.faqs} />
    </>
  );
}
