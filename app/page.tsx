import { HeroSection } from "@/components/home/hero-section";
import { ProductsOverview } from "@/components/home/products-overview";
import { QuoteSection } from "@/components/home/quote-section";
import { ServicesPreview } from "@/components/home/services-preview";

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
