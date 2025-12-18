import { Building2, FlaskConical, Magnet, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/constants";

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
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              About Us
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              <strong>FAR Better Bio</strong> is an R&D company developing
              advanced blood-cell separation and apheretic blood filtration
              technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Core Platforms */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-center text-2xl font-bold sm:text-3xl">
            Our Core Platforms
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            <Card className="hover:border-primary/50 border-2 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <Magnet className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">MiniCeive™</h3>
                <p className="text-muted-foreground">
                  A compact laboratory device that enables fast and practical
                  magnetic separation and liquid handling using magnet-based
                  tubes and containers.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary/50 border-2 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">AutoCeive™</h3>
                <p className="text-muted-foreground">
                  An automated benchtop blood-cell separation device designed
                  for rapid, sterile, and efficient cell enrichment from fluid
                  laboratory samples.
                </p>
              </CardContent>
            </Card>
            <Card className="hover:border-primary/50 border-2 transition-colors">
              <CardContent className="p-6">
                <div className="bg-primary/10 text-primary mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                  <FlaskConical className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">AphereCeive™</h3>
                <p className="text-muted-foreground">
                  A programmable, cell-specific apheretic collection system
                  enabling targeted isolation of immune and circulating cells
                  directly from continuously processed blood.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-muted/30 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
              Our Locations
            </h2>
            <p className="text-muted-foreground mb-8 text-center">
              Our R&D operations are based in METU Teknokent and METU Research
              Center (BIOMATEN), where we collaborate with multidisciplinary
              engineers and scientists.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="bg-card flex items-start gap-3 rounded-lg border p-4">
                <Building2 className="text-primary mt-0.5 h-5 w-5" />
                <div>
                  <h3 className="font-semibold">METU Teknokent</h3>
                  <p className="text-muted-foreground text-sm">
                    Middle East Technical University Technopark
                  </p>
                </div>
              </div>
              <div className="bg-card flex items-start gap-3 rounded-lg border p-4">
                <Building2 className="text-primary mt-0.5 h-5 w-5" />
                <div>
                  <h3 className="font-semibold">BIOMATEN</h3>
                  <p className="text-muted-foreground text-sm">
                    METU Research Center
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Business */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
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
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-primary-foreground py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
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
                <Mail className="h-5 w-5" />
                {siteConfig.contact.email}
              </a>
              <Button
                asChild
                variant="secondary"
                className="text-primary bg-white hover:bg-white/90"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
