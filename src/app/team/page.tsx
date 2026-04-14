import type { Metadata } from "next";
import Link from "next/link";

import { ImagePlaceholder } from "@/components/image-placeholder";
import { FadeIn } from "@/components/motion";
import { PageSchema } from "@/components/seo/page-schema";
import { TeamGrid } from "@/components/team/team-grid";
import { Button } from "@/components/ui/button";
import { mergeKeywords, seoKeywordSets } from "@/lib/seo";

const teamKeywords = mergeKeywords(
  seoKeywordSets.core,
  seoKeywordSets.globalReach,
  seoKeywordSets.brand,
  seoKeywordSets.location
);

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the FAR Better Bio team in Turkiye: experts in biomedical engineering, apheresis-focused device development, and global cell separation AR-GE collaborations.",
  keywords: teamKeywords,
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team - FAR Better Bio",
    description:
      "Meet the experts driving blood cell separation and apheresis-focused biomedical R&D in Turkiye for global partners.",
    url: "/team",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAR Better Bio Team | Biomedical AR-GE in Turkiye",
    description:
      "Our multidisciplinary team builds apheresis and aferez-oriented device technologies for global biomedical research.",
  },
};

export default function TeamPage() {
  return (
    <>
      <PageSchema
        path="/team"
        type="AboutPage"
        title="FAR Better Bio Team | Biomedical AR-GE in Turkiye"
        description="Meet the multidisciplinary team behind FAR Better Bio's apheresis and aferez-focused device development in Turkiye for global applications."
        keywords={teamKeywords}
      />
      {/* Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Our Team
              </h1>
              <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                Meet the dedicated professionals behind FAR Better Bio. Our
                multidisciplinary team brings together expertise in biomedical
                engineering, research, and technology to advance blood-cell
                separation and apheresis-oriented medical device solutions.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <ImagePlaceholder
                aspectRatio="video"
                label="Team Image"
                className="shadow-lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 sm:py-16" aria-labelledby="team-grid-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="team-grid-heading" className="sr-only">
            Team Members
          </h2>
          <TeamGrid />
        </div>
      </section>

      {/* Join Us CTA */}
      <section
        className="bg-muted/30 py-12 sm:py-16"
        aria-labelledby="join-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="none" className="mx-auto max-w-2xl text-center">
            <h2
              id="join-heading"
              className="mb-4 text-2xl font-bold sm:text-3xl"
            >
              Work With Us
            </h2>
            <p className="text-muted-foreground mb-6">
              Interested in joining our team or collaborating with us?
              We&apos;re always looking for talented individuals passionate
              about advancing biomedical research.
            </p>
            <Button render={<Link href="/contact" />} nativeButton={false}>
              Get in Touch
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
