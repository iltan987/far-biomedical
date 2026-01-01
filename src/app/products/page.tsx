import { ArrowRight, Beaker, FlaskConical, Package } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Explore FAR Better Bio's laboratory instruments, consumables, and upcoming AutoCeive cell separation device.",
  openGraph: {
    title: "Products - FAR Better Bio",
    description: "Laboratory instruments and consumables for research.",
  },
};

const productCategories = [
  {
    title: "AutoCeive",
    description:
      "Our flagship benchtop blood cell separation device using high-gradient magnetic separation. Fully automated processing for research laboratories.",
    icon: Beaker,
    badge: "Coming Soon",
    href: null,
  },
  {
    title: "Laboratory Instruments",
    description:
      "Browse our selection of high-quality laboratory instruments including centrifuges, incubators, ovens, balances, and more.",
    icon: FlaskConical,
    href: "/products/laboratory-instruments",
  },
  {
    title: "Laboratory Consumables",
    description:
      "Essential laboratory consumables including tubes, pipettes, slides, and storage containers for your research needs.",
    icon: Package,
    href: "/products/laboratory-consumables",
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-primary/5 to-background bg-linear-to-b py-10 sm:py-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="animate-fade-in-up mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Our Products
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              From our innovative cell separation devices to a comprehensive
              range of laboratory equipment and consumables, we provide
              everything you need for your research.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {productCategories.map((category) => (
              <Card
                key={category.title}
                className="relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg">
                      <category.icon className="h-6 w-6" />
                    </div>
                    {category.badge && (
                      <Badge variant="secondary">{category.badge}</Badge>
                    )}
                  </div>
                  <CardTitle className="mt-4 text-xl">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-base">
                    {category.description}
                  </CardDescription>
                  {category.href ? (
                    <Button asChild variant="outline" className="w-full">
                      <Link href={category.href}>
                        Browse {category.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : (
                    <Button disabled variant="outline" className="w-full">
                      Coming Soon
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-muted/30 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Can&apos;t Find What You Need?
            </h2>
            <p className="text-muted-foreground mb-6">
              We work with local and international companies to provide
              necessary laboratory materials and instruments for your research.
              Contact us with your specific requirements.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
