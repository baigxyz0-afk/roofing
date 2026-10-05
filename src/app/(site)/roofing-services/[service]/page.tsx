import { parentServices } from "@/content/services";
import { ServicePageView, serviceMeta } from "@/components/templates/servicePage";

export const dynamicParams = false;
export function generateStaticParams() {
  return parentServices.map((s) => ({ service: s.slug }));
}

type P = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: P) {
  return serviceMeta((await params).service);
}

export default async function ServicePage({ params }: P) {
  return <ServicePageView slug={(await params).service} />;
}
