import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/motion";
import { CtaLink } from "@/components/site/cta-link";
import heroImageFallback from "@/images/home/hero.jpg";

type SiteSettings = {
  heroTitle?: string | null;
  heroBadge?: string | null;
  heroSubtitle?: string | null;
  heroDescription?: string | null;
  heroImageUrl?: string | null;
  heroPrimaryCtaLabel?: string | null;
  heroSecondaryCtaLabel?: string | null;
} | null;

const DEFAULTS = {
  heroTitle: "Get Better with FAR Better",
  heroBadge: "AutoCeive Coming Soon",
  heroSubtitle:
    "FAR is our way of helping make scientific research and biomedical AR-GE in Turkiye more accessible for global partners.",
  heroDescription:
    "We believe that innovation should not be slowed down by repetitive groundwork. Our R&D mission is to develop tools that streamline the most demanding parts of laboratory work, including apheresis and aferez-oriented cell separation workflows, so scientists can focus on what truly matters: discovery and progress.",
  heroPrimaryCtaLabel: "Explore Products",
  heroSecondaryCtaLabel: "Contact Us",
};

export function HeroSection({
  settings,
  heroTitleAttr,
  heroBadgeAttr,
  heroSubtitleAttr,
  heroDescriptionAttr,
  heroImageAttr,
  heroPrimaryCtaAttr,
  heroSecondaryCtaAttr,
}: {
  settings?: SiteSettings;
  heroTitleAttr?: string;
  heroBadgeAttr?: string;
  heroSubtitleAttr?: string;
  heroDescriptionAttr?: string;
  heroImageAttr?: string;
  heroPrimaryCtaAttr?: string;
  heroSecondaryCtaAttr?: string;
}) {
  const title = settings?.heroTitle ?? DEFAULTS.heroTitle;
  const badge = settings?.heroBadge ?? DEFAULTS.heroBadge;
  const subtitle = settings?.heroSubtitle ?? DEFAULTS.heroSubtitle;
  const description = settings?.heroDescription ?? DEFAULTS.heroDescription;
  const heroImageUrl = settings?.heroImageUrl ?? null;
  const heroPrimaryCtaLabel =
    settings?.heroPrimaryCtaLabel ?? DEFAULTS.heroPrimaryCtaLabel;
  const heroSecondaryCtaLabel =
    settings?.heroSecondaryCtaLabel ?? DEFAULTS.heroSecondaryCtaLabel;

  return (
    <section className="from-primary/5 via-background to-background relative overflow-x-hidden bg-linear-to-b md:h-[calc(100svh-var(--site-header-height))]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary-glow),transparent)]" />

      <div className="container mx-auto h-full px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-10 xl:py-12">
        <div className="grid h-full grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
          <FadeIn
            renderStrategy="paint-safe"
            className="text-center md:text-left"
          >
            <div
              className="border-primary/20 bg-primary/5 text-primary mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm"
              data-sanity={heroBadgeAttr}
            >
              <span className="bg-primary mr-2 h-2 w-2 animate-pulse rounded-full" />
              {badge}
            </div>

            <h1
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl"
              data-sanity={heroTitleAttr}
            >
              {title.includes("FAR Better") ? (
                <>
                  {title.split("FAR Better")[0]}
                  <span className="text-primary">FAR Better</span>
                  {title.split("FAR Better")[1]}
                </>
              ) : (
                title
              )}
            </h1>

            <p
              className="text-muted-foreground mt-6 text-lg leading-relaxed sm:text-xl lg:text-2xl"
              data-sanity={heroSubtitleAttr}
            >
              {subtitle}
            </p>

            <p
              className="text-muted-foreground mt-4 max-w-2xl text-base sm:text-lg md:mx-0"
              data-sanity={heroDescriptionAttr}
            >
              {description}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
              <CtaLink
                href="/products"
                size="lg"
                className="w-full sm:w-auto"
                data-sanity={heroPrimaryCtaAttr}
              >
                {heroPrimaryCtaLabel}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </CtaLink>
              <CtaLink
                href="/contact"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                data-sanity={heroSecondaryCtaAttr}
              >
                {heroSecondaryCtaLabel}
              </CtaLink>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2} renderStrategy="paint-safe">
            <div
              className="aspect-video overflow-hidden rounded-lg shadow-lg"
              data-sanity={heroImageAttr}
            >
              <Image
                src={heroImageUrl ?? heroImageFallback}
                alt="FAR Better Bio laboratory equipment for blood cell separation"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 720px"
                quality={72}
                priority
                {...(heroImageUrl ? {} : { placeholder: "blur" })}
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>

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
