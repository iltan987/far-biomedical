import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-950 via-black to-red-950 py-24 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              Our Products
            </h1>
            <p className="text-xl text-red-100">
              Innovative solutions for laboratory research, from cutting-edge
              cell isolation devices to essential laboratory supplies and
              instruments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
            Featured Products
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {/* AutoCeive */}
            <Card className="border-red-200 transition-shadow hover:shadow-xl">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-red-600">Coming Soon</Badge>
                <CardTitle className="text-3xl text-red-600">
                  AutoCeive
                </CardTitle>
                <CardDescription className="text-base">
                  Benchtop blood cell separation device
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">AutoCeive Image</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">✓</span>
                    <span className="text-gray-600">
                      High-gradient magnetic separation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">✓</span>
                    <span className="text-gray-600">
                      Fully automated workflow
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">✓</span>
                    <span className="text-gray-600">
                      Cost-efficient processing
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <Link href="/contact">Get Notified</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* AphereCeive */}
            <Card className="border-red-200 transition-shadow hover:shadow-xl">
              <CardHeader>
                <Badge className="mb-2 w-fit bg-gray-600">In Development</Badge>
                <CardTitle className="text-3xl text-red-600">
                  AphereCeive
                </CardTitle>
                <CardDescription className="text-base">
                  Continuous blood processing technology
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">AphereCeive Image</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">✓</span>
                    <span className="text-gray-600">
                      Real-time cell isolation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">✓</span>
                    <span className="text-gray-600">
                      Gene therapy applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">✓</span>
                    <span className="text-gray-600">
                      Advanced apheresis technology
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full border border-red-600 bg-transparent text-red-600! hover:bg-red-50"
                  asChild
                >
                  <Link href="/contact">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Software Tools */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Software Tools
            </h2>
            <p className="mb-8 text-xl text-gray-700">
              We work on developing software tools that optimize laboratory
              workflows and accelerate certain analyses. Our goal is to provide
              researchers with efficient, reliable, and scalable digital
              solutions that increase productivity.
            </p>
            <Button className="bg-red-600 hover:bg-red-700" asChild>
              <Link href="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
            Product Categories
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-red-200 bg-linear-to-br from-white to-red-50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">
                  Laboratory Consumables
                </CardTitle>
                <CardDescription className="text-base">
                  Essential materials for your research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  We work with local and international companies to provide
                  necessary laboratory materials for your research. High-quality
                  consumables for every laboratory need.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span className="text-gray-600">
                      Pipettes and pipette tips
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span className="text-gray-600">Cell culture supplies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span className="text-gray-600">
                      Reagents and chemicals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span className="text-gray-600">
                      Sample storage solutions
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <Link href="/products/laboratory-consumables">
                    View Consumables
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="border-red-200 bg-linear-to-br from-white to-red-50 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">
                  Laboratory Instruments
                </CardTitle>
                <CardDescription className="text-base">
                  Advanced tools for precise research
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6 text-gray-600">
                  We work with local and international companies to provide
                  necessary laboratory tools and instruments for your research.
                  Cutting-edge equipment for modern laboratories.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span className="text-gray-600">
                      Centrifuges and separators
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span className="text-gray-600">Microscopy equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span className="text-gray-600">
                      Analytical instruments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">•</span>
                    <span className="text-gray-600">
                      Temperature control devices
                    </span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <Link href="/products/laboratory-instruments">
                    View Instruments
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-linear-to-br from-gray-900 to-red-950 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Can&apos;t Find What You Need?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-red-50">
            Our team can help you find the perfect product for your research
            needs. Get in touch with us today.
          </p>
          <Button
            size="lg"
            className="border border-white bg-transparent text-white! hover:bg-white/10"
            asChild
          >
            <Link href="/contact">Contact Our Team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
