import {
  ArrowRight,
  FlaskConical,
  Microscope,
  Shield,
  Truck,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Sample Preparation",
    description:
      "Controlled collection, stabilization, and processing of blood samples.",
    icon: FlaskConical,
  },
  {
    title: "Cell Isolation",
    description:
      "Target cell isolation using proprietary device technology for high efficiency.",
    icon: Microscope,
  },
  {
    title: "Quality Control",
    description: "Viability testing, purity analysis, and microscopic imaging.",
    icon: Shield,
  },
  {
    title: "Delivery & Reporting",
    description: "Comprehensive analysis, documentation, and secure delivery.",
    icon: Truck,
  },
];

export function ServicesPreview() {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div>
            <h2 className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase">
              Our Services
            </h2>
            <p className="text-3xl font-bold tracking-tight sm:text-4xl">
              Professional Laboratory Services
            </p>
            <p className="text-muted-foreground mt-4 text-lg">
              We offer comprehensive target cell isolation services available
              nationwide across Türkiye, with remote technical support for
              international clients.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-muted/50 hover:bg-muted flex items-start gap-3 rounded-lg p-4 transition-colors"
                >
                  <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{service.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="mt-8">
              <Link href="/services">
                Learn More About Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* AutoCeive Features */}
          <div className="relative">
            <div className="bg-card rounded-2xl border p-8 shadow-sm">
              <h3 className="mb-6 text-2xl font-bold">AutoCeive Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium">
                    1
                  </div>
                  <p className="text-muted-foreground">
                    Isolates desired cells from fluid sample using an
                    immunomagnetic cell separation system.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium">
                    2
                  </div>
                  <p className="text-muted-foreground">
                    Processes high numbers of cells in short notice, while being
                    cost-efficient.
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-primary text-primary-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-medium">
                    3
                  </div>
                  <p className="text-muted-foreground">
                    Offers an ideal alternative for cell biology and research
                    laboratories.
                  </p>
                </li>
              </ul>
              <div className="mt-6 border-t pt-6">
                <p className="text-primary text-sm font-medium">
                  Laboratory equipment and reagents now available at our
                  products page!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
