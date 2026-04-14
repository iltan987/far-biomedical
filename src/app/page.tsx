import type { Metadata } from "next";

import { HeroSection } from "@/components/home/hero-section";
import { ProductsOverview } from "@/components/home/products-overview";
import { QuoteSection } from "@/components/home/quote-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { PageSchema } from "@/components/seo/page-schema";
import { mergeKeywords, seoKeywordSets } from "@/lib/seo";

const homeKeywords = mergeKeywords(
  seoKeywordSets.core,
  seoKeywordSets.manufacturerIntent,
  seoKeywordSets.globalReach,
  seoKeywordSets.brand,
  seoKeywordSets.location,
  seoKeywordSets.products,
  seoKeywordSets.services
);

export const metadata: Metadata = {
  title: "FAR Better Bio | Blood Cell Separation Technology",
  description:
    "FAR Better Bio is a Turkiye-based biomedical R&D company developing apheresis and aferez-oriented blood-cell separation devices for global partners. Explore AutoCeive, AphereCeive, laboratory products, and cell isolation services.",
  keywords: homeKeywords,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "FAR Better Bio | Turkiye Biomedical Apheresis Device R&D Company",
    description:
      "Discover a Turkiye-based biomedical company developing apheresis and aferez-focused blood-cell separation technology, laboratory devices, and global isolation workflows.",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAR Better Bio | Apheresis and Aferez Device Development",
    description:
      "A Turkiye biomedical R&D team building cell-separation and apheresis-focused device technologies for international collaborations.",
  },
};

export default function Home() {
  return (
    <>
      <PageSchema
        path="/"
        title="FAR Better Bio | Turkiye Biomedical Apheresis Device R&D Company"
        description="Turkiye-based biomedical R&D company developing apheresis and aferez-focused blood-cell separation technologies, products, and services for global partners."
        keywords={homeKeywords}
      />
      <HeroSection />
      <ProductsOverview />
      <ServicesPreview />
      <QuoteSection />
    </>
  );
}
