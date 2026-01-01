import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { products } from "@/data/products";

export function ProductsOverview() {
  return (
    <section
      className="bg-muted/30 py-16 sm:py-24 lg:py-32"
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
          <h2 className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase">
            FAR: Filtrate Alternate Return
          </h2>
          <p
            id="products-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Cell-Targeted Blood Processing
          </p>
          <p className="text-muted-foreground mt-4 text-lg">
            Our long-term goal is to build cell-targeted blood filtration and
            processing devices engineered for advanced apheresis and gene
            therapies.
          </p>
        </FadeIn>

        {/* Product Cards */}
        <StaggerContainer
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
          role="list"
        >
          {products.map((product) => (
            <StaggerItem key={product.title}>
              <article role="listitem">
                <Card className="group focus-within:ring-ring relative h-full overflow-hidden transition-all duration-300 focus-within:ring-2 hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div
                        className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-lg"
                        aria-hidden="true"
                      >
                        <product.icon className="h-6 w-6" />
                      </div>
                      {product.badge && (
                        <Badge variant="secondary">{product.badge}</Badge>
                      )}
                    </div>
                    <CardTitle className="mt-4 text-xl">
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Additional Products CTA */}
        <FadeIn direction="none" className="mt-12 text-center lg:mt-16">
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
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
