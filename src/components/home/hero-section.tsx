import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="from-primary/5 via-background to-background relative overflow-hidden bg-linear-to-b">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary-glow),transparent)]" />

      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <FadeIn className="text-center lg:text-left">
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
              FAR is our way of taking responsibility for making scientific
              research more accessible.
            </p>

            <p className="text-muted-foreground mt-4 max-w-2xl text-base sm:text-lg lg:mx-0">
              We believe that innovation should not be slowed down by repetitive
              groundwork. Our R&D mission is to develop tools that streamline
              the most demanding parts of laboratory work — so scientists can
              focus on what truly matters: discovery and progress.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>

          {/* Hero Image */}
          <FadeIn direction="right" delay={0.2}>
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/images/home/img-1.jpg"
                alt="Hero Image"
                width={2889}
                height={1664}
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
