import { ArrowRight, Quote, User } from "lucide-react";

import { FadeIn } from "@/components/motion";
import { CtaLink } from "@/components/site/cta-link";

type Props = {
  quoteText?: string | null;
  quoteAttribution?: string | null;
  ctaHeading?: string | null;
  ctaDescription?: string | null;
  ctaButtonLabel?: string | null;
  quoteTextAttr?: string;
  quoteAttributionAttr?: string;
  ctaHeadingAttr?: string;
  ctaDescriptionAttr?: string;
  ctaButtonLabelAttr?: string;
};

const DEFAULTS = {
  quoteText:
    "Cure is not far away, as long as you and I are willing to take things... a little further.",
  quoteAttribution: "CEO, FAR Better",
  ctaHeading: "What do you need?",
  ctaDescription:
    "You can contact us about the product you need. Our team is here to provide you the highest quality and most ideal product.",
  ctaButtonLabel: "Contact Us",
};

export function QuoteSection({
  quoteText,
  quoteAttribution,
  ctaHeading,
  ctaDescription,
  ctaButtonLabel,
  quoteTextAttr,
  quoteAttributionAttr,
  ctaHeadingAttr,
  ctaDescriptionAttr,
  ctaButtonLabelAttr,
}: Props) {
  const resolvedQuoteText = quoteText ?? DEFAULTS.quoteText;
  const resolvedQuoteAttribution = quoteAttribution ?? DEFAULTS.quoteAttribution;
  const resolvedCtaHeading = ctaHeading ?? DEFAULTS.ctaHeading;
  const resolvedCtaDescription = ctaDescription ?? DEFAULTS.ctaDescription;
  const resolvedCtaButtonLabel =
    ctaButtonLabel ?? DEFAULTS.ctaButtonLabel;

  return (
    <section className="bg-primary text-primary-foreground py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-3xl text-center">
          <figure>
            <Quote
              className="mx-auto mb-6 h-12 w-12 opacity-50"
              aria-hidden="true"
            />
            <blockquote
              className="text-2xl leading-relaxed font-medium italic sm:text-3xl lg:text-4xl"
              data-sanity={quoteTextAttr}
            >
              &quot;{resolvedQuoteText}&quot;
            </blockquote>
            <figcaption className="mt-8 flex flex-col items-center gap-3">
              {/* CEO Avatar Placeholder */}
              <div
                className="bg-primary-foreground/20 flex h-16 w-16 items-center justify-center rounded-full"
                aria-hidden="true"
              >
                <User className="text-primary-foreground/60 h-8 w-8" />
              </div>
              <span
                className="text-lg font-semibold opacity-90"
                data-sanity={quoteAttributionAttr}
              >
                — {resolvedQuoteAttribution}
              </span>
            </figcaption>
          </figure>
        </FadeIn>

        {/* CTA */}
        <FadeIn direction="none" delay={0.2} className="mt-12 text-center">
          <h3
            className="mb-4 text-xl font-bold sm:text-2xl"
            data-sanity={ctaHeadingAttr}
          >
            {resolvedCtaHeading}
          </h3>
          <p
            className="text-primary-foreground/80 mx-auto mb-6 max-w-xl"
            data-sanity={ctaDescriptionAttr}
          >
            {resolvedCtaDescription}
          </p>
          <CtaLink
            href="/contact"
            variant="secondary"
            size="lg"
            className="text-primary bg-primary-foreground hover:bg-primary-foreground/90"
            data-sanity={ctaButtonLabelAttr}
          >
            {resolvedCtaButtonLabel}
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </CtaLink>
        </FadeIn>
      </div>
    </section>
  );
}
