import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion";
import { CtaLink } from "@/components/site/cta-link";
import heroImage from "@/images/home/hero.jpg";

export function HeroSection() {
  return (
    <section className="from-primary/5 via-background to-background relative overflow-hidden bg-linear-to-b lg:min-h-[calc(100svh-var(--site-header-height))]">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary-glow),transparent)]" />

      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-14 xl:py-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          {/* Content */}
          <FadeIn renderStrategy="paint-safe" className="text-center md:text-left">
            {/* Badge */}
            <div className="border-primary/20 bg-primary/5 text-primary mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm">
              <span className="bg-primary mr-2 h-2 w-2 animate-pulse rounded-full" />
              AutoCeive Coming Soon
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Get Better with <span className="text-primary">FAR Better</span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed sm:text-xl lg:text-2xl">
              FAR is our way of helping make scientific research and biomedical
              AR-GE in Turkiye more accessible for global partners.
            </p>

            <p className="text-muted-foreground mt-4 max-w-2xl text-base sm:text-lg md:mx-0">
              We believe that innovation should not be slowed down by repetitive
              groundwork. Our R&D mission is to develop tools that streamline
              the most demanding parts of laboratory work, including apheresis
              and aferez-oriented cell separation workflows, so scientists can
              focus on what truly matters: discovery and progress.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <CtaLink
                href="/products"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </CtaLink>
              <CtaLink
                href="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Contact Us
              </CtaLink>
            </div>
          </FadeIn>

          {/* Hero Image */}
          <FadeIn
            direction="right"
            delay={0.2}
            renderStrategy="paint-safe"
          >
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <Image
                src={heroImage}
                alt="FAR Better Bio laboratory equipment for blood cell separation"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
                quality={72}
                priority
                placeholder="blur"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <Link
        href="#products-overview"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="text-muted-foreground h-8 w-8 animate-bounce" />
      </Link>
    </section>
  );
}
