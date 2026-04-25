import { Globe, Mail, Truck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { createDataAttribute } from "next-sanity";

import { FadeIn } from "@/components/motion";
import type { FAQData } from "@/components/services/service-faqs";
import { ServiceFAQs } from "@/components/services/service-faqs";
import type { WorkflowStepData } from "@/components/services/workflow-steps";
import { WorkflowSteps } from "@/components/services/workflow-steps";
import { Button } from "@/components/ui/button";
import laboratorySupplyServicesImage from "@/images/services/laboratory-supply-services.jpg";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { servicesPageQuery } from "@/sanity/lib/queries";
import type { SanityServicesPage } from "@/sanity/lib/types";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive laboratory services including PBMC processing, target cell isolation, quality control, and microscopic imaging throughout Turkey.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Laboratory Services - FAR Better Bio",
    description: "Professional cell isolation and laboratory services.",
  },
};

const DEFAULTS = {
  heroTitle: "Our Services",
  heroDescription:
    "We offer comprehensive laboratory services including the processing of blood samples into PBMCs, isolation of target cells with high efficiency, and the provision of high-quality microscopic imaging.",
  coverageTitle: "Nationwide Coverage",
  coverageDescription: "Available across Türkiye",
  supportTitle: "International Support",
  supportDescription: "Remote technical assistance",
  workflowHeading: "Target Cell Isolation – How We Do It?",
  workflowDescription:
    "Our laboratory provides a comprehensive and high-precision cell isolation workflow designed to meet research, clinical, and industry-level requirements. Each step is performed under standardized quality protocols.",
  supplyHeading: "Laboratory Supply Services",
  supplyDescription:
    "We provide comprehensive supply services for research laboratories. Whatever your needs may be, our specialized team identifies high-quality, specific products from around the world and delivers them to you in a manner tailored to your requirements.",
  supplyLinkLineIntro: "You can also review our",
  supplyLinkLineLabel: "apheresis and aferez-focused product roadmap",
  supplyLinkLineHref: "/products",
  supplyLinkLineOutro: "for device and consumable planning.",
  supplyPrimaryCtaLabel: "Browse Instruments",
  supplyPrimaryCtaHref: "/products/laboratory-instruments",
  supplySecondaryCtaLabel: "Browse Consumables",
  supplySecondaryCtaHref: "/products/laboratory-consumables",
  faqsHeading: "Frequently Asked Questions",
  contactHeading: "Ready to Get Started?",
  contactDescription:
    "Contact us to discuss your laboratory service needs. Our team is here to provide reliable, efficient, and scientifically robust solutions.",
  contactButtonLabel: "Contact Us",
};

export default async function ServicesPage() {
  const { data: rawPage } = await sanityFetch({ query: servicesPageQuery });

  const servicesPage = rawPage as SanityServicesPage;
  const servicesPageId = servicesPage?._id ?? "servicesPage";

  const pageAttrs = {
    heroTitle: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "heroTitle",
    }).toString(),
    heroDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "heroDescription",
    }).toString(),
    coverageTitle: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "coverageTitle",
    }).toString(),
    coverageDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "coverageDescription",
    }).toString(),
    supportTitle: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "supportTitle",
    }).toString(),
    supportDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "supportDescription",
    }).toString(),
    workflowHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "workflowHeading",
    }).toString(),
    workflowDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "workflowDescription",
    }).toString(),
    supplyImage: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "supplyImage",
    }).toString(),
    supplyHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "supplyHeading",
    }).toString(),
    supplyDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "supplyDescription",
    }).toString(),
    supplyLinkLineIntro: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "supplyLinkLineIntro",
    }).toString(),
    supplyLinkLineLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "supplyLinkLineLabel",
    }).toString(),
    supplyLinkLineOutro: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "supplyLinkLineOutro",
    }).toString(),
    supplyPrimaryCtaLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "supplyPrimaryCtaLabel",
    }).toString(),
    supplySecondaryCtaLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "supplySecondaryCtaLabel",
    }).toString(),
    faqsHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "faqsHeading",
    }).toString(),
    contactHeading: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "contactHeading",
    }).toString(),
    contactDescription: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "contactDescription",
    }).toString(),
    contactButtonLabel: createDataAttribute({
      projectId: "mr2294zf",
      dataset: "production",
      id: servicesPageId,
      type: "servicesPage",
      path: "contactButtonLabel",
    }).toString(),
  };

  const workflowSteps: WorkflowStepData[] =
    servicesPage?.workflowSteps?.map((step, index) => ({
      _id: step.id ?? step._key ?? `services-page-step-${index + 1}`,
      stepNumber: index + 1,
      title: step.title ?? `Step ${index + 1}`,
      description: step.description ?? "",
      imageUrl: step.image
        ? urlFor(step.image).width(800).height(450).url()
        : undefined,
      titleAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: servicesPageId,
        type: "servicesPage",
        path: `workflowSteps[${index}].title`,
      }).toString(),
      descriptionAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: servicesPageId,
        type: "servicesPage",
        path: `workflowSteps[${index}].description`,
      }).toString(),
      imageAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: servicesPageId,
        type: "servicesPage",
        path: `workflowSteps[${index}].image`,
      }).toString(),
    })) ?? [];

  const faqs: FAQData[] =
    servicesPage?.faqs?.map((faq, index) => ({
      _id: faq.id ?? faq._key ?? `services-page-faq-${index + 1}`,
      question: faq.question ?? "",
      answer: faq.answer ?? "",
      questionAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: servicesPageId,
        type: "servicesPage",
        path: `faqs[${index}].question`,
      }).toString(),
      answerAttr: createDataAttribute({
        projectId: "mr2294zf",
        dataset: "production",
        id: servicesPageId,
        type: "servicesPage",
        path: `faqs[${index}].answer`,
      }).toString(),
    })) ?? [];

  const heroTitle = servicesPage?.heroTitle ?? DEFAULTS.heroTitle;
  const heroDescription = servicesPage?.heroDescription ?? DEFAULTS.heroDescription;
  const coverageTitle = servicesPage?.coverageTitle ?? DEFAULTS.coverageTitle;
  const coverageDescription =
    servicesPage?.coverageDescription ?? DEFAULTS.coverageDescription;
  const supportTitle = servicesPage?.supportTitle ?? DEFAULTS.supportTitle;
  const supportDescription =
    servicesPage?.supportDescription ?? DEFAULTS.supportDescription;
  const workflowHeading =
    servicesPage?.workflowHeading ?? DEFAULTS.workflowHeading;
  const workflowDescription =
    servicesPage?.workflowDescription ?? DEFAULTS.workflowDescription;
  const supplyImageUrl = servicesPage?.supplyImage
    ? urlFor(servicesPage.supplyImage).width(1200).height(675).url()
    : null;
  const supplyHeading = servicesPage?.supplyHeading ?? DEFAULTS.supplyHeading;
  const supplyDescription =
    servicesPage?.supplyDescription ?? DEFAULTS.supplyDescription;
  const supplyLinkLineIntro =
    servicesPage?.supplyLinkLineIntro ?? DEFAULTS.supplyLinkLineIntro;
  const supplyLinkLineLabel =
    servicesPage?.supplyLinkLineLabel ?? DEFAULTS.supplyLinkLineLabel;
  const supplyLinkLineHref =
    servicesPage?.supplyLinkLineHref ?? DEFAULTS.supplyLinkLineHref;
  const supplyLinkLineOutro =
    servicesPage?.supplyLinkLineOutro ?? DEFAULTS.supplyLinkLineOutro;
  const supplyPrimaryCtaLabel =
    servicesPage?.supplyPrimaryCtaLabel ?? DEFAULTS.supplyPrimaryCtaLabel;
  const supplyPrimaryCtaHref =
    servicesPage?.supplyPrimaryCtaHref ?? DEFAULTS.supplyPrimaryCtaHref;
  const supplySecondaryCtaLabel =
    servicesPage?.supplySecondaryCtaLabel ?? DEFAULTS.supplySecondaryCtaLabel;
  const supplySecondaryCtaHref =
    servicesPage?.supplySecondaryCtaHref ?? DEFAULTS.supplySecondaryCtaHref;
  const faqsHeading = servicesPage?.faqsHeading ?? DEFAULTS.faqsHeading;
  const contactHeading = servicesPage?.contactHeading ?? DEFAULTS.contactHeading;
  const contactDescription =
    servicesPage?.contactDescription ?? DEFAULTS.contactDescription;
  const contactButtonLabel =
    servicesPage?.contactButtonLabel ?? DEFAULTS.contactButtonLabel;
  return (
    <>
      {/* Hero Section */}
      <section className="no-snap from-primary/5 to-background bg-linear-to-b py-10 sm:py-14 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-3xl text-center">
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
        </div>
      </section>

      {/* Service Area */}
      <section className="no-snap border-b py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <FadeIn delay={0}>
              <article className="flex items-center gap-3">
                <div
                  className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full"
                  aria-hidden="true"
                >
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold" data-sanity={pageAttrs.coverageTitle}>
                    {coverageTitle}
                  </p>
                  <p
                    className="text-muted-foreground text-sm"
                    data-sanity={pageAttrs.coverageDescription}
                  >
                    {coverageDescription}
                  </p>
                </div>
              </article>
            </FadeIn>
            <FadeIn delay={0.1}>
              <article className="flex items-center gap-3">
                <div
                  className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full"
                  aria-hidden="true"
                >
                  <Globe className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold" data-sanity={pageAttrs.supportTitle}>
                    {supportTitle}
                  </p>
                  <p
                    className="text-muted-foreground text-sm"
                    data-sanity={pageAttrs.supportDescription}
                  >
                    {supportDescription}
                  </p>
                </div>
              </article>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-12 sm:py-16" aria-labelledby="workflow-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
            <h2
              id="workflow-heading"
              className="text-2xl font-bold sm:text-3xl"
              data-sanity={pageAttrs.workflowHeading}
            >
              {workflowHeading}
            </h2>
            <p className="text-muted-foreground mt-4" data-sanity={pageAttrs.workflowDescription}>
              {workflowDescription}
            </p>
          </FadeIn>
          <WorkflowSteps steps={workflowSteps} />
        </div>
      </section>

      {/* Laboratory Supply Services */}
      <section
        className="bg-muted/30 py-12 sm:py-16"
        aria-labelledby="supply-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:gap-16">
            <FadeIn direction="left">
              <div
                className="group aspect-video overflow-hidden rounded-lg shadow-lg"
                data-sanity={pageAttrs.supplyImage}
              >
                <Image
                  src={supplyImageUrl ?? laboratorySupplyServicesImage}
                  alt={supplyHeading}
                  width={1200}
                  height={675}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  {...(supplyImageUrl ? {} : { placeholder: "blur" })}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </FadeIn>
            <FadeIn direction="none" delay={0.1}>
              <h2
                id="supply-heading"
                className="mb-4 text-center text-2xl font-bold sm:text-3xl md:text-left"
                data-sanity={pageAttrs.supplyHeading}
              >
                {supplyHeading}
              </h2>
              <p className="text-muted-foreground mb-8 text-center md:text-left">
                <span data-sanity={pageAttrs.supplyDescription}>
                  {supplyDescription}
                </span>{" "}
                <span data-sanity={pageAttrs.supplyLinkLineIntro}>
                  {supplyLinkLineIntro}
                </span>{" "}
                <Link
                  href={supplyLinkLineHref}
                  className="text-primary hover:underline"
                  data-sanity={pageAttrs.supplyLinkLineLabel}
                >
                  {supplyLinkLineLabel}
                </Link>{" "}
                <span data-sanity={pageAttrs.supplyLinkLineOutro}>
                  {supplyLinkLineOutro}
                </span>
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row md:justify-start">
                <Button
                  render={<Link href={supplyPrimaryCtaHref} />}
                  nativeButton={false}
                  data-sanity={pageAttrs.supplyPrimaryCtaLabel}
                >
                  {supplyPrimaryCtaLabel}
                </Button>
                <Button
                  render={<Link href={supplySecondaryCtaHref} />}
                  nativeButton={false}
                  variant="outline"
                  data-sanity={pageAttrs.supplySecondaryCtaLabel}
                >
                  {supplySecondaryCtaLabel}
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-12 sm:py-16" aria-labelledby="faqs-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <FadeIn>
              <h2
                id="faqs-heading"
                className="mb-8 text-center text-2xl font-bold sm:text-3xl"
                data-sanity={pageAttrs.faqsHeading}
              >
                {faqsHeading}
              </h2>
            </FadeIn>
            <ServiceFAQs faqs={faqs} />
          </div>
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
              data-sanity={pageAttrs.contactHeading}
            >
              {contactHeading}
            </h2>
            <p className="mb-6 opacity-90" data-sanity={pageAttrs.contactDescription}>
              {contactDescription}
            </p>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              variant="secondary"
              size="lg"
              className="text-primary bg-primary-foreground hover:bg-primary-foreground/90"
              data-sanity={pageAttrs.contactButtonLabel}
            >
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              {contactButtonLabel}
            </Button>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
