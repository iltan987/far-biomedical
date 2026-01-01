import { Activity, ArrowRight, Beaker, Code, Magnet } from "lucide-react";
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

const products = [
  {
    title: "MiniCeive",
    description:
      "MiniCeive is a compact laboratory device that enables fast and practical magnetic separation and liquid handling using magnet-based tubes and containers.",
    icon: Magnet,
    badge: "Coming Soon",
    href: "/products",
  },
  {
    title: "AutoCeive",
    description:
      "Isolates targeted cells from blood or PBMC, using high-gradient magnetic separation. AutoCeive processes your input sample and delivers cells of interest as a ready-to-use output in a fully automated manner.",
    icon: Beaker,
    badge: "Coming Soon",
    href: "/products",
  },
  {
    title: "AphereCeive",
    description:
      "AphereCeive aims to integrate magnetic isolation into continuous blood processing technology, to offer real-time target cell isolation from the patient for potential gene therapies and cellular treatments.",
    icon: Activity,
    badge: "In Development",
    href: "/products",
  },
  {
    title: "Software Tools",
    description:
      "We work on developing software tools that optimize laboratory workflows, and accelerate certain analyses. Our goal is to provide researchers with efficient, reliable, and scalable digital solutions that increase productivity.",
    icon: Code,
    badge: "Coming Soon",
    href: "/products",
  },
];

export function ProductsOverview() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase">
            FAR: Filtrate Alternate Return
          </h2>
          <p className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Cell-Targeted Blood Processing
          </p>
          <p className="text-muted-foreground mt-4 text-lg">
            Our long-term goal is to build cell-targeted blood filtration and
            processing devices engineered for advanced apheresis and gene
            therapies.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {products.map((product) => (
            <Card
              key={product.title}
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg">
                    <product.icon className="h-6 w-6" />
                  </div>
                  {product.badge && (
                    <Badge variant="secondary">{product.badge}</Badge>
                  )}
                </div>
                <CardTitle className="mt-4 text-xl">{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {product.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Products CTA */}
        <div className="mt-12 text-center lg:mt-16">
          <div className="bg-card inline-flex flex-col items-center justify-center gap-4 rounded-2xl border p-6 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-semibold">Looking for laboratory supplies?</p>
              <p className="text-muted-foreground text-sm">
                We work with local and international companies to provide
                laboratory materials and instruments.
              </p>
            </div>
            <Button asChild variant="default" className="shrink-0">
              <Link href="/products/laboratory-instruments">
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
