import { notFound } from "next/navigation";
import { publishedServices } from "@/content/services";
import { SERVICE_PARENT } from "@/content/serviceTree";
import { ServicePageView, serviceMeta } from "@/components/templates/servicePage";

// Subservice pages: /roofing-services/{parent}/{sub}/. Only real parent-child pairs are generated.
export const dynamicParams = false;
export function generateStaticParams() {
  return publishedServices.filter((s) => SERVICE_PARENT[s.slug]).map((s) => ({ service: SERVICE_PARENT[s.slug], sub: s.slug }));
}

type P = { params: Promise<{ service: string; sub: string }> };

export async function generateMetadata({ params }: P) {
  return serviceMeta((await params).sub);
}

export default async function SubservicePage({ params }: P) {
  const { service, sub } = await params;
  if (SERVICE_PARENT[sub] !== service) notFound();
  return <ServicePageView slug={sub} />;
}
