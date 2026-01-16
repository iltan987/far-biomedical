import { ArrowRight, Quote, User } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";

export function QuoteSection() {
  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <figure>
            <Quote
              className="mx-auto mb-6 h-12 w-12 opacity-50"
              aria-hidden="true"
            />
            <blockquote className="text-2xl leading-relaxed font-medium italic sm:text-3xl lg:text-4xl">
              &quot;Cure is not far away, as long as you and I are willing to
              take things... a little further.&quot;
            </blockquote>
            <figcaption className="mt-8 flex flex-col items-center gap-3">
              {/* CEO Avatar Placeholder */}
              <div
                className="bg-primary-foreground/20 flex h-16 w-16 items-center justify-center rounded-full"
                aria-hidden="true"
              >
                <User className="text-primary-foreground/60 h-8 w-8" />
              </div>
              <span className="text-lg font-semibold opacity-90">
                — CEO, FAR Better
              </span>
            </figcaption>
          </figure>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="none" delay={0.2} className="mt-12 text-center">
          <h3 className="mb-4 text-xl font-bold sm:text-2xl">
            What do you need?
          </h3>
          <p className="text-primary-foreground/80 mx-auto mb-6 max-w-xl">
            You can contact us about the product you need. Our team is here to
            provide you the highest quality and most ideal product.
          </p>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="text-primary bg-primary-foreground hover:bg-primary-foreground/90"
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
