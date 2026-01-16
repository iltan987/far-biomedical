import { FlaskConical, Home, Mail } from "lucide-react";
import Link from "next/link";

import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="from-primary/5 via-background to-background relative flex min-h-[80vh] items-center overflow-hidden bg-linear-to-b">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary-glow),transparent)]" />

      <div className="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <FadeIn direction="none">
            <div className="mb-6 flex justify-center">
              <div className="bg-primary/10 text-primary flex h-16 w-16 items-center justify-center rounded-2xl">
                <FlaskConical className="h-8 w-8" aria-hidden="true" />
              </div>
            </div>
          </FadeIn>

          {/* 404 Number */}
          <FadeIn delay={0.1}>
            <p className="text-primary/20 text-8xl font-bold tracking-tighter sm:text-9xl">
              404
            </p>
          </FadeIn>

          {/* Message */}
          <FadeIn delay={0.2}>
            <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              Page Not Found
            </h1>
            <p className="text-muted-foreground mx-auto mt-4 max-w-md text-base leading-relaxed sm:text-lg">
              It seems this experiment didn&apos;t go as planned. The page
              you&apos;re looking for may have been moved or no longer exists.
            </p>
          </FadeIn>

          {/* Action Buttons */}
          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" aria-hidden="true" />
                  Back to Home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link href="/contact">
                  <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </FadeIn>

          {/* Quick Links */}
          <FadeIn delay={0.4}>
            <div className="text-muted-foreground mt-12 text-sm">
              <p className="mb-3">Or explore our site:</p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link
                  href="/products"
                  className="hover:text-primary transition-colors"
                >
                  Products
                </Link>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
