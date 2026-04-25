import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion";
import { CtaLink } from "@/components/site/cta-link";
import autoCeiveImageFallback from "@/images/home/auto-ceive2.jpeg";

export type ServiceData = {
  _id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
};

const DEFAULTS = {
  sectionLabel: "Our Services",
  sectionHeading: "Professional Laboratory Services",
  sectionDescription:
    "We offer comprehensive target cell isolation services available nationwide across Türkiye, with remote technical support for international clients.",
  inlineIntro: "See our",
  inlinePrimaryLabel: "apheresis and aferez-focused product portfolio",
  inlinePrimaryHref: "/products",
  inlineMiddle: "or",
  inlineSecondaryLabel: "contact our Turkiye-based biomedical team",
  inlineSecondaryHref: "/contact",
  inlineOutro: "for manufacturer and R&D collaboration inquiries.",
  featuredProductTitle: "AutoCeive Features",
  featuredProductFeatures: [
    "Isolates desired cells from fluid sample using an immunomagnetic cell separation system.",
    "Processes high numbers of cells in short notice, while being cost-efficient.",
    "Offers an ideal alternative for cell biology and research laboratories.",
  ],
};

type Props = {
  services: ServiceData[];
  sectionLabel?: string | null;
  sectionHeading?: string | null;
  sectionDescription?: string | null;
  inlineIntro?: string | null;
  inlinePrimaryLabel?: string | null;
  inlinePrimaryHref?: string | null;
  inlineMiddle?: string | null;
  inlineSecondaryLabel?: string | null;
  inlineSecondaryHref?: string | null;
  inlineOutro?: string | null;
  sectionLabelAttr?: string;
  sectionHeadingAttr?: string;
  sectionDescriptionAttr?: string;
  inlineIntroAttr?: string;
  inlinePrimaryLabelAttr?: string;
  inlineMiddleAttr?: string;
  inlineSecondaryLabelAttr?: string;
  inlineOutroAttr?: string;
  ctaButtonLabel?: string | null;
  ctaButtonLabelAttr?: string;
  featuredProduct?: {
    title: string;
    features?: string[] | null;
    imageUrl?: string | null;
    imageAttr?: string;
  } | null;
};

export function ServicesPreview({
  services,
  sectionLabel,
  sectionHeading,
  sectionDescription,
  inlineIntro,
  inlinePrimaryLabel,
  inlinePrimaryHref,
  inlineMiddle,
  inlineSecondaryLabel,
  inlineSecondaryHref,
  inlineOutro,
  sectionLabelAttr,
  sectionHeadingAttr,
  sectionDescriptionAttr,
  inlineIntroAttr,
  inlinePrimaryLabelAttr,
  inlineMiddleAttr,
  inlineSecondaryLabelAttr,
  inlineOutroAttr,
  ctaButtonLabel,
  ctaButtonLabelAttr,
  featuredProduct,
}: Props) {
  const label = sectionLabel ?? DEFAULTS.sectionLabel;
  const heading = sectionHeading ?? DEFAULTS.sectionHeading;
  const description = sectionDescription ?? DEFAULTS.sectionDescription;
  const linkLineIntro = inlineIntro ?? DEFAULTS.inlineIntro;
  const linkLinePrimaryLabel =
    inlinePrimaryLabel ?? DEFAULTS.inlinePrimaryLabel;
  const linkLinePrimaryHref = inlinePrimaryHref ?? DEFAULTS.inlinePrimaryHref;
  const linkLineMiddle = inlineMiddle ?? DEFAULTS.inlineMiddle;
  const linkLineSecondaryLabel =
    inlineSecondaryLabel ?? DEFAULTS.inlineSecondaryLabel;
  const linkLineSecondaryHref =
    inlineSecondaryHref ?? DEFAULTS.inlineSecondaryHref;
  const linkLineOutro = inlineOutro ?? DEFAULTS.inlineOutro;
  const ctaLabel = ctaButtonLabel ?? "Learn More About Our Services";
  const featuredTitle = featuredProduct?.title
    ? `${featuredProduct.title} Features`
    : DEFAULTS.featuredProductTitle;
  const features = featuredProduct?.features?.length
    ? featuredProduct.features
    : DEFAULTS.featuredProductFeatures;

  return (
    <section
      className="py-16 sm:py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <h2
              className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase"
              data-sanity={sectionLabelAttr}
            >
              {label}
            </h2>
            <p
              id="services-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              data-sanity={sectionHeadingAttr}
            >
              {heading}
            </p>
            <p
              className="text-muted-foreground mt-4 text-lg"
              data-sanity={sectionDescriptionAttr}
            >
              {description}
            </p>
            <p className="text-muted-foreground mt-3 text-sm">
              <span data-sanity={inlineIntroAttr}>{linkLineIntro}</span>{" "}
              <Link
                href={linkLinePrimaryHref}
                className="text-primary hover:underline"
                data-sanity={inlinePrimaryLabelAttr}
              >
                {linkLinePrimaryLabel}
              </Link>{" "}
              <span data-sanity={inlineMiddleAttr}>{linkLineMiddle}</span>{" "}
              <Link
                href={linkLineSecondaryHref}
                className="text-primary hover:underline"
                data-sanity={inlineSecondaryLabelAttr}
              >
                {linkLineSecondaryLabel}
              </Link>{" "}
              <span data-sanity={inlineOutroAttr}>{linkLineOutro}</span>
            </p>

            <div
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
              role="list"
            >
              {services.map((service, index) => (
                <FadeIn key={service._id} delay={index * 0.1}>
                  <article
                    role="listitem"
                    className="bg-muted/50 hover:bg-muted flex h-full items-start gap-3 rounded-lg p-4 transition-colors"
                  >
                    {service.icon && (
                      <div
                        className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                        aria-hidden="true"
                      >
                        <service.icon className="h-5 w-5" />
                      </div>
                    )}
                    <div>
                      <h3 className="text-sm font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>

            <CtaLink
              href="/services"
              className="mt-8"
              data-sanity={ctaButtonLabelAttr}
            >
              {ctaLabel}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </CtaLink>
          </FadeIn>

          <FadeIn direction="none" delay={0.2} className="relative">
            <div className="bg-card overflow-hidden rounded-2xl border shadow-sm">
              <div data-sanity={featuredProduct?.imageAttr}>
                <Image
                  src={featuredProduct?.imageUrl ?? autoCeiveImageFallback}
                  alt={`${featuredTitle} Device`}
                  width={900}
                  height={600}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  {...(featuredProduct?.imageUrl ? {} : { placeholder: "blur" })}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-6 text-2xl font-bold">{featuredTitle}</h3>
                <ol
                  className="space-y-4"
                  aria-label={`${featuredTitle} key features`}
                >
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div
                        className="bg-primary text-primary-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium"
                        aria-hidden="true"
                      >
                        {i + 1}
                      </div>
                      <p className="text-muted-foreground">{feature}</p>
                    </li>
                  ))}
                </ol>
                <div className="mt-6 border-t pt-6">
                  <p className="text-primary text-sm font-medium">
                    Laboratory equipment and reagents now available at our
                    products page!
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
