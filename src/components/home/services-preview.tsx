import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import autoCeiveImage from "@/images/home/auto-ceive2.jpeg";

export function ServicesPreview() {
  return (
    <section
      className="py-16 sm:py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <FadeIn>
            <h2 className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase">
              Our Services
            </h2>
            <p
              id="services-heading"
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Professional Laboratory Services
            </p>
            <p className="text-muted-foreground mt-4 text-lg">
              We offer comprehensive target cell isolation services available
              nationwide across Türkiye, with remote technical support for
              international clients.
            </p>

            <StaggerContainer
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2"
              role="list"
            >
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <article
                    role="listitem"
                    className="bg-muted/50 hover:bg-muted flex h-full items-start gap-3 rounded-lg p-4 transition-colors"
                  >
                    <div
                      className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                      aria-hidden="true"
                    >
                      <service.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{service.title}</h3>
                      <p className="text-muted-foreground mt-1 text-sm">
                        {service.description}
                      </p>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <Button asChild className="mt-8">
              <Link href="/services">
                Learn More About Our Services
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </FadeIn>

          {/* AutoCeive Features */}
          <FadeIn direction="none" delay={0.2} className="relative">
            <div className="bg-card overflow-hidden rounded-2xl border shadow-sm">
              {/* AutoCeive Image */}
              <Image
                src={autoCeiveImage}
                alt="AutoCeive Device"
                sizes="(max-width: 1024px) 100vw, 50vw"
                placeholder="blur"
                className="h-full w-full object-cover"
              />
              <div className="p-8">
                <h3 className="mb-6 text-2xl font-bold">AutoCeive Features</h3>
                <ol className="space-y-4" aria-label="AutoCeive key features">
                  <li className="flex items-start gap-3">
                    <div
                      className="bg-primary text-primary-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium"
                      aria-hidden="true"
                    >
                      1
                    </div>
                    <p className="text-muted-foreground">
                      Isolates desired cells from fluid sample using an
                      immunomagnetic cell separation system.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="bg-primary text-primary-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium"
                      aria-hidden="true"
                    >
                      2
                    </div>
                    <p className="text-muted-foreground">
                      Processes high numbers of cells in short notice, while
                      being cost-efficient.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div
                      className="bg-primary text-primary-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium"
                      aria-hidden="true"
                    >
                      3
                    </div>
                    <p className="text-muted-foreground">
                      Offers an ideal alternative for cell biology and research
                      laboratories.
                    </p>
                  </li>
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
