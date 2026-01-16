import { Building2, Mail } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AnimatedLogo } from "@/components/animated-logo";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/constants";

const platforms = products.slice(0, 3);

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about FAR Better Bio, an R&D company at METU Teknokent developing AutoCeive and AphereCeive blood cell separation technologies.",
  openGraph: {
    title: "About FAR Better Bio",
    description:
      "Learn about our mission to advance blood-cell separation technology.",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                About Us
              </h1>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                <strong>FAR Better Bio</strong> is an R&D company developing
                advanced blood-cell separation and apheretic blood filtration
                technologies.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <AnimatedLogo />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Platforms */}
      <section className="py-12 sm:py-16" aria-labelledby="platforms-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2
              id="platforms-heading"
              className="mb-12 text-center text-2xl font-bold sm:text-3xl"
            >
              Our Core Platforms
            </h2>
          </FadeIn>
          <div
            className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
            role="list"
          >
            {platforms.map((platform, index) => (
              <FadeIn key={platform.title} delay={index * 0.1} className="h-full">
                <article role="listitem" className="h-full">
                  <Card className="group hover:border-primary/50 focus-within:ring-ring h-full overflow-hidden border-2 transition-colors focus-within:ring-2">
                    {/* Platform Image */}
                    <div className="aspect-4/3 overflow-hidden">
                      {platform.image ? (
                        <Image
                          src={platform.image}
                          alt={platform.title}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          placeholder="blur"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <ImagePlaceholder
                          aspectRatio="4/3"
                          className="rounded-none transition-transform duration-300 group-hover:scale-105"
                        />
                      )}
                    </div>
                    <CardContent className="px-6 pt-6 pb-4">
                      <div
                        className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                        aria-hidden="true"
                      >
                        <platform.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">
                        {platform.title}™
                      </h3>
                      <p className="text-muted-foreground">
                        {platform.longDescription ?? platform.description}
                      </p>
                    </CardContent>
                  </Card>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section
        className="bg-muted/30 py-12 sm:py-16"
        aria-labelledby="locations-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <FadeIn direction="none">
              <h2
                id="locations-heading"
                className="mb-8 text-center text-2xl font-bold sm:text-3xl"
              >
                Our Locations
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                Our R&D operations are based in METU Teknokent and METU Research
                Center (BIOMATEN), where we collaborate with multidisciplinary
                engineers and scientists.
              </p>
            </FadeIn>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <FadeIn>
                <article className="bg-card overflow-hidden rounded-xl border">
                  <ImagePlaceholder
                    aspectRatio="video"
                    className="rounded-none"
                  />
                  <div className="flex items-start gap-3 p-4">
                    <Building2
                      className="text-primary mt-0.5 h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold">METU Teknokent</h3>
                      <p className="text-muted-foreground text-sm">
                        Middle East Technical University Technopark
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
              <FadeIn>
                <article className="bg-card overflow-hidden rounded-xl border">
                  <ImagePlaceholder
                    aspectRatio="video"
                    className="rounded-none"
                  />
                  <div className="flex items-start gap-3 p-4">
                    <Building2
                      className="text-primary mt-0.5 h-5 w-5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-semibold">BIOMATEN</h3>
                      <p className="text-muted-foreground text-sm">
                        METU Research Center
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Business */}
      <section className="py-12 sm:py-16" aria-labelledby="research-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2
              id="research-heading"
              className="mb-4 text-2xl font-bold sm:text-3xl"
            >
              Supporting Research Excellence
            </h2>
            <p className="text-muted-foreground mb-8">
              In addition to our core research, we actively distribute
              laboratory devices, consumables, and materials for supporting our
              R&D pipeline, by ensuring access to cutting-edge instruments and
              high-quality materials.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild>
                <Link href="/products/laboratory-instruments">
                  Browse Instruments
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/products/laboratory-consumables">
                  Browse Consumables
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        className="bg-primary text-primary-foreground py-12 sm:py-16"
        aria-labelledby="contact-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="none" className="mx-auto max-w-2xl text-center">
            <h2
              id="contact-heading"
              className="mb-4 text-2xl font-bold sm:text-3xl"
            >
              Get in Touch
            </h2>
            <p className="mb-6 opacity-90">
              Have questions about our technology or services? We&apos;d love to
              hear from you.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-primary-foreground/90 hover:text-primary-foreground flex items-center gap-2"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
              <Button
                asChild
                variant="secondary"
                className="text-primary bg-primary-foreground hover:bg-primary-foreground/90"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
