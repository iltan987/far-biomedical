import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-950 via-black to-red-950 py-16 text-white sm:py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Get better with FAR Better
            </h1>
            <p className="mb-4 text-lg text-red-100 sm:text-xl">
              <strong>
                FAR is our way of taking responsibility for making scientific
                research more accessible.
              </strong>
            </p>
            <p className="mb-8 text-base text-red-50/80 sm:text-lg">
              We believe that innovation should not be slowed down by repetitive
              groundwork. Our R&D mission is to develop tools that streamline
              the most demanding parts of laboratory work — so scientists can
              focus on what truly matters: discovery and progress.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-red-600 transition-all hover:scale-105 hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
                asChild
              >
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button
                size="lg"
                className="border border-white bg-transparent text-white! transition-all hover:scale-105 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-950"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AutoCeive Announcement */}
      <section className="bg-red-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="duration-700">
              <Badge className="mb-4 bg-red-600 transition-colors hover:bg-red-700">
                Coming Soon
              </Badge>
              <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                We are moving steadily toward that vision.
              </h2>
              <p className="mb-6 text-lg text-gray-700 sm:text-xl">
                Our first milestone,{" "}
                <strong className="text-red-600">AutoCeive</strong>, a benchtop
                blood cell separation device, will be available very soon!
              </p>
            </div>
            <div className="flex h-64 items-center justify-center rounded-lg bg-gray-200 shadow-sm transition-shadow hover:shadow-md sm:h-80">
              <span className="text-gray-400">AutoCeive Device Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAR Mission Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-8 max-w-4xl text-center sm:mb-12">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl">
              FAR: Filtrate Alternate Return!
            </h2>
            <p className="text-base text-gray-600 sm:text-lg">
              Our long-term goal is to build{" "}
              <strong>cell-targeted blood filtration and processing</strong>{" "}
              devices engineered for{" "}
              <strong>advanced apheresis and gene therapies</strong>. By
              supporting both research and future clinical applications, we aim
              to help bridge the gap between today&apos;s capabilities and
              tomorrow&apos;s cures.
            </p>
          </div>

          {/* Product Cards */}
          <div className="mb-8 grid grid-cols-1 gap-6 sm:mb-12 md:grid-cols-3">
            <Card className="group border-red-200 transition-all focus-within:ring-2 focus-within:ring-red-400 focus-within:ring-offset-2 hover:scale-105 hover:border-red-400 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-red-600 transition-colors group-hover:text-red-700">
                  AutoCeive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 sm:text-base">
                  Isolates targeted cells from blood or PBMC, using
                  high-gradient magnetic separation. AutoCeive processes your
                  input sample and delivers cells of interest as a ready-to-use
                  output in a fully automated manner.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-red-200 transition-all focus-within:ring-2 focus-within:ring-red-400 focus-within:ring-offset-2 hover:scale-105 hover:border-red-400 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-red-600 transition-colors group-hover:text-red-700">
                  AphereCeive
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 sm:text-base">
                  AphereCeive aims to integrate magnetic isolation into
                  continuous blood processing technology, to offer real time
                  target cell isolation from the patient for potential gene
                  therapies and cellular treatments.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-red-200 transition-all focus-within:ring-2 focus-within:ring-red-400 focus-within:ring-offset-2 hover:scale-105 hover:border-red-400 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-red-600 transition-colors group-hover:text-red-700">
                  Software Tools
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 sm:text-base">
                  We work on developing software tools that optimize laboratory
                  workflows, and accelerates certain analysis. Our goal is to
                  provide researchers with efficient, reliable, and scalable
                  digital solutions that increase productivity.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Laboratory Services */}
      <section className="bg-linear-to-br from-gray-900 to-red-950 py-12 text-white sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            <Card className="group border-white/20 bg-white/10 text-white backdrop-blur transition-all focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">
                  Looking for laboratory consumables..?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-white/90 sm:text-base">
                  We work with local and international companies to provide
                  necessary laboratory materials for your research.
                </p>
                <Button
                  className="border border-white bg-transparent text-white! transition-all hover:scale-105 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  asChild
                >
                  <Link href="/products/laboratory-consumables">
                    View Consumables
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group border-white/20 bg-white/10 text-white backdrop-blur transition-all focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">
                  Looking for a laboratory device..?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-white/90 sm:text-base">
                  We work with local and international companies to provide
                  necessary laboratory tools and instruments for your research.
                </p>
                <Button
                  className="border border-white bg-transparent text-white! transition-all hover:scale-105 hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                  asChild
                >
                  <Link href="/products/laboratory-instruments">
                    View Instruments
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-red-600 py-12 text-white sm:py-16 md:py-20">
        <div className="container px-4 text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
            What do you need?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-base text-red-50 sm:mb-8 sm:text-lg md:text-xl">
            You can contact us about the product you need. Our team is here to
            provide you the highest quality and most ideal product.
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600 transition-all hover:scale-110 hover:bg-red-50 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-red-600"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* AutoCeive Features */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="duration-700">
              <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl">
                AutoCeive
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="group flex items-start transition-all hover:translate-x-2">
                  <span className="mr-2 text-lg text-red-600 transition-transform group-hover:scale-125">
                    ✓
                  </span>
                  <span className="text-sm text-gray-700 sm:text-base">
                    Isolates desired cells from fluid sample using an
                    immunomagnetic cell separation system.
                  </span>
                </li>
                <li className="group flex items-start transition-all hover:translate-x-2">
                  <span className="mr-2 text-lg text-red-600 transition-transform group-hover:scale-125">
                    ✓
                  </span>
                  <span className="text-sm text-gray-700 sm:text-base">
                    Processes high numbers of cells in short notice, while being
                    cost-efficient.
                  </span>
                </li>
                <li className="group flex items-start transition-all hover:translate-x-2">
                  <span className="mr-2 text-lg text-red-600 transition-transform group-hover:scale-125">
                    ✓
                  </span>
                  <span className="text-sm text-gray-700 sm:text-base">
                    Offers an ideal alternative for cell biology and research
                    laboratories.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex h-64 items-center justify-center rounded-lg bg-gray-200 shadow-sm transition-shadow hover:shadow-md sm:h-80">
              <span className="text-gray-400">AutoCeive in Lab Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Availability Banner */}
      <section className="bg-red-50 py-8 sm:py-12">
        <div className="container px-4 text-center">
          <p className="mb-4 text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">
            <strong>Laboratory equipment and reagents</strong> now available at
            our products page!
          </p>
          <Button
            className="bg-red-600 transition-all hover:scale-105 hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2"
            asChild
          >
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-linear-to-br from-black via-red-950 to-black py-12 text-white sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-lg font-semibold italic sm:text-xl md:text-2xl">
              &quot;Cure is not far away, as long as you and I are willing to
              take things... a little further.&quot;
            </p>
            <footer className="text-sm text-red-300 sm:text-base">
              — CEO, FAR Better
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
