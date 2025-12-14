import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LaboratoryConsumablesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-950 via-black to-red-950 py-24 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              Laboratory Consumables
            </h1>
            <p className="text-xl text-red-100">
              High-quality laboratory materials and supplies for your research
              needs. We work with local and international companies to provide
              the best products.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">Pipettes & Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">Pipettes Image</span>
                </div>
                <p className="text-gray-600">
                  Precision pipettes and disposable tips in various sizes for
                  accurate liquid handling.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">
                  Cell Culture Supplies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">Cell Culture Image</span>
                </div>
                <p className="text-gray-600">
                  Culture plates, flasks, and media for optimal cell growth and
                  maintenance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">
                  Reagents & Chemicals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">Reagents Image</span>
                </div>
                <p className="text-gray-600">
                  High-purity reagents and chemicals for various laboratory
                  applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">Sample Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">Storage Image</span>
                </div>
                <p className="text-gray-600">
                  Tubes, vials, and cryogenic storage solutions for sample
                  preservation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">
                  Filtration Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">Filtration Image</span>
                </div>
                <p className="text-gray-600">
                  Filters, membranes, and filtration devices for sample
                  purification.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">
                  Protective Equipment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">PPE Image</span>
                </div>
                <p className="text-gray-600">
                  Gloves, lab coats, and safety equipment for laboratory
                  personnel.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-4xl font-bold">Need a Specific Product?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-red-50">
            Can&apos;t find what you&apos;re looking for? Contact us and
            we&apos;ll help you source the perfect laboratory consumables for
            your needs.
          </p>
          <Button
            size="lg"
            className="bg-white !text-red-600 hover:bg-red-50"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
