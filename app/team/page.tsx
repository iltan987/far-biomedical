import type { Metadata } from "next";
import Link from "next/link";

import { TeamGrid } from "@/components/team/team-grid";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind FAR Better Bio - experts in biomedical engineering, software development, and cell separation technology.",
  openGraph: {
    title: "Our Team - FAR Better Bio",
    description:
      "Meet the experts driving innovation in blood cell separation.",
  },
};

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Team
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              Meet the dedicated professionals behind FAR Better Bio. Our
              multidisciplinary team brings together expertise in biomedical
              engineering, research, and technology to advance blood-cell
              separation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <TeamGrid />
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="bg-muted/30 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Work With Us
            </h2>
            <p className="text-muted-foreground mb-6">
              Interested in joining our team or collaborating with us?
              We&apos;re always looking for talented individuals passionate
              about advancing biomedical research.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
