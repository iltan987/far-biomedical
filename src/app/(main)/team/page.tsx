import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createDataAttribute } from "next-sanity";

import { ImagePlaceholder } from "@/components/image-placeholder";
import { FadeIn } from "@/components/motion";
import type { TeamMemberData } from "@/components/team/team-grid";
import { TeamGrid } from "@/components/team/team-grid";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { teamPageQuery } from "@/sanity/lib/queries";
import type { SanityTeamPage } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the team behind FAR Better Bio - experts in biomedical engineering, software development, and cell separation technology.",
  alternates: {
    canonical: "/team",
  },
  openGraph: {
    title: "Our Team - FAR Better Bio",
    description:
      "Meet the experts driving innovation in blood cell separation.",
  },
};

export default async function TeamPage() {
  const { data: rawPage } = await sanityFetch({ query: teamPageQuery });
  const teamPage = rawPage as SanityTeamPage;
  const pageId = teamPage?._id ?? "teamPage";

  const defaults = {
    heroTitle: "Our Team",
    heroDescription:
      "Meet the dedicated professionals behind FAR Better Bio. Our multidisciplinary team brings together expertise in biomedical engineering, research, and technology to advance blood-cell separation solutions.",
    teamGridHeading: "Team Members",
    joinHeading: "Work With Us",
    joinDescription:
      "Interested in joining our team or collaborating with us? We're always looking for talented individuals passionate about advancing biomedical research.",
    joinButtonLabel: "Get in Touch",
    joinButtonHref: "/contact",
  } as const;

  const heroImageUrl = teamPage?.heroImage
    ? urlFor(teamPage.heroImage).width(1200).height(675).url()
    : null;

  const members: TeamMemberData[] =
    teamPage?.members?.map((m, index) => ({
      _id: m.id ?? m._key ?? `member-${index + 1}`,
      name: m.name ?? `Team Member ${index + 1}`,
      title: m.title ?? "",
      imageUrl: m.photo
        ? urlFor(m.photo).width(256).height(256).url()
        : undefined,
      linkedinUrl: m.linkedinUrl ?? undefined,
      nameAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: pageId,
        type: "teamPage",
        path: `members[${index}].name`,
      }).toString(),
      titleAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: pageId,
        type: "teamPage",
        path: `members[${index}].title`,
      }).toString(),
      photoAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: pageId,
        type: "teamPage",
        path: `members[${index}].photo`,
      }).toString(),
      linkedinUrlAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: pageId,
        type: "teamPage",
        path: `members[${index}].linkedinUrl`,
      }).toString(),
    })) ?? [];

  const pageAttrs = {
    heroTitle: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "teamPage",
      path: "heroTitle",
    }).toString(),
    heroDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "teamPage",
      path: "heroDescription",
    }).toString(),
    heroImage: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "teamPage",
      path: "heroImage",
    }).toString(),
    teamGridHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "teamPage",
      path: "teamGridHeading",
    }).toString(),
    joinHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "teamPage",
      path: "joinHeading",
    }).toString(),
    joinDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "teamPage",
      path: "joinDescription",
    }).toString(),
    joinButtonLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: pageId,
      type: "teamPage",
      path: "joinButtonLabel",
    }).toString(),
  };

  const heroTitle = teamPage?.heroTitle ?? defaults.heroTitle;
  const heroDescription = teamPage?.heroDescription ?? defaults.heroDescription;
  const teamGridHeading = teamPage?.teamGridHeading ?? defaults.teamGridHeading;
  const joinHeading = teamPage?.joinHeading ?? defaults.joinHeading;
  const joinDescription = teamPage?.joinDescription ?? defaults.joinDescription;
  const joinButtonLabel = teamPage?.joinButtonLabel ?? defaults.joinButtonLabel;
  const joinButtonHref = teamPage?.joinButtonHref ?? defaults.joinButtonHref;

  return (
    <>
      {/* Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="text-center lg:text-left">
              <h1
                className="text-4xl font-bold tracking-tight sm:text-5xl"
                data-sanity={pageAttrs.heroTitle}
              >
                {heroTitle}
              </h1>
              <p
                className="text-muted-foreground mt-4 text-lg leading-relaxed"
                data-sanity={pageAttrs.heroDescription}
              >
                {heroDescription}
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div data-sanity={pageAttrs.heroImage}>
                {heroImageUrl ? (
                  <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                    <Image
                      src={heroImageUrl}
                      alt={heroTitle}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder
                    aspectRatio="video"
                    label="Team Image"
                    className="shadow-lg"
                  />
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-12 sm:py-16" aria-labelledby="team-grid-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="team-grid-heading"
            className="sr-only"
            data-sanity={pageAttrs.teamGridHeading}
          >
            {teamGridHeading}
          </h2>
          <TeamGrid members={members} />
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
              data-sanity={pageAttrs.joinHeading}
            >
              {joinHeading}
            </h2>
            <p
              className="text-muted-foreground mb-6"
              data-sanity={pageAttrs.joinDescription}
            >
              {joinDescription}
            </p>
            <Button
              render={<Link href={joinButtonHref} />}
              nativeButton={false}
              data-sanity={pageAttrs.joinButtonLabel}
            >
              {joinButtonLabel}
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
