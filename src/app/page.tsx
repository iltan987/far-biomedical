import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero-section";
import { ProductsOverview } from "@/components/home/products-overview";
import { QuoteSection } from "@/components/home/quote-section";
import { ServicesPreview } from "@/components/home/services-preview";

export const metadata: Metadata = {
  title: "FAR Better Bio | Blood Cell Separation Technology",
  description:
    "FAR Better Bio develops advanced blood-cell separation and apheretic blood filtration technologies. Discover AutoCeive and AphereCeive platforms for research and clinical applications.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsOverview />
      <ServicesPreview />
      <QuoteSection />
    </>
  );
}
