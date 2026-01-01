import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="from-primary/5 via-background to-background relative overflow-hidden bg-linear-to-b">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary-glow),transparent)]" />

      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <FadeIn className="mx-auto max-w-3xl text-center">
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

          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            We believe that innovation should not be slowed down by repetitive
            groundwork. Our R&D mission is to develop tools that streamline the
            most demanding parts of laboratory work — so scientists can focus on
            what truly matters: discovery and progress.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
      </div>
    </section>
  );
}
