import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-950 via-black to-red-950 py-24 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              Get better with FAR Better
            </h1>
            <p className="mb-4 text-xl text-red-100">
              <strong>
                FAR is our way of taking responsibility for making scientific
                research more accessible.
              </strong>
            </p>
            <p className="mb-8 text-lg text-red-50/80">
              We believe that innovation should not be slowed down by repetitive
              groundwork. Our R&D mission is to develop tools that streamline
              the most demanding parts of laboratory work — so scientists can
              focus on what truly matters: discovery and progress.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button
                size="lg"
                className="border border-white bg-transparent text-white! hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AutoCeive Announcement */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 bg-red-600">Coming Soon</Badge>
              <h2 className="mb-4 text-4xl font-bold text-gray-900">
                We are moving steadily toward that vision.
              </h2>
              <p className="mb-6 text-xl text-gray-700">
                Our first milestone,{" "}
                <strong className="text-red-600">AutoCeive</strong>, a benchtop
                blood cell separation device, will be available very soon!
              </p>
            </div>
            <div className="flex h-80 items-center justify-center rounded-lg bg-gray-200">
              <span className="text-gray-400">AutoCeive Device Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAR Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              FAR: Filtrate Alternate Return!
            </h2>
            <p className="text-lg text-gray-600">
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
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">AutoCeive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Isolates targeted cells from blood or PBMC, using
                  high-gradient magnetic separation. AutoCeive processes your
                  input sample and delivers cells of interest as a ready-to-use
                  output in a fully automated manner.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">AphereCeive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  AphereCeive aims to integrate magnetic isolation into
                  continuous blood processing technology, to offer real time
                  target cell isolation from the patient for potential gene
                  therapies and cellular treatments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">Software Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
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
      <section className="bg-linear-to-br from-gray-900 to-red-950 py-16 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-white/20 bg-white/10 text-white backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Looking for laboratory consumables..?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-white/90">
                  We work with local and international companies to provide
                  necessary laboratory materials for your research.
                </p>
                <Button
                  className="border border-white bg-transparent text-white! hover:bg-white/10"
                  asChild
                >
                  <Link href="/products/laboratory-consumables">
                    View Consumables
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-white/20 bg-white/10 text-white backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Looking for a laboratory device..?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-white/90">
                  We work with local and international companies to provide
                  necessary laboratory tools and instruments for your research.
                </p>
                <Button
                  className="border border-white bg-transparent text-white! hover:bg-white/10"
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
      <section className="bg-red-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-4 text-4xl font-bold">What do you need?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-red-50">
            You can contact us about the product you need. Our team is here to
            provide you the highest quality and most ideal product.
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-red-50"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* AutoCeive Features */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">
                AutoCeive
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✓</span>
                  <span className="text-gray-700">
                    Isolates desired cells from fluid sample using an
                    immunomagnetic cell separation system.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✓</span>
                  <span className="text-gray-700">
                    Processes high numbers of cells in short notice, while being
                    cost-efficient.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-red-600">✓</span>
                  <span className="text-gray-700">
                    Offers an ideal alternative for cell biology and research
                    laboratories.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex h-80 items-center justify-center rounded-lg bg-gray-200">
              <span className="text-gray-400">AutoCeive in Lab Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Availability Banner */}
      <section className="bg-red-50 py-12">
        <div className="container text-center">
          <p className="mb-4 text-2xl font-semibold text-gray-900">
            <strong>Laboratory equipment and reagents</strong> now available at
            our products page!
          </p>
          <Button className="bg-red-600 hover:bg-red-700" asChild>
            <Link href="/products">View All Products</Link>
          </Button>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-linear-to-br from-black via-red-950 to-black py-16 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-2xl font-semibold italic">
              &quot;Cure is not far away, as long as you and I are willing to
              take things... a little further.&quot;
            </p>
            <footer className="text-red-300">— CEO, FAR Better</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
