import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LaboratoryInstrumentsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-950 via-black to-red-950 py-24 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              Laboratory Instruments
            </h1>
            <p className="text-xl text-red-100">
              Advanced laboratory tools and equipment for precise research. We
              partner with leading manufacturers to provide cutting-edge
              instrumentation.
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
                <CardTitle className="text-red-600">
                  Centrifuges & Separators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">Centrifuge Image</span>
                </div>
                <p className="text-gray-600">
                  High-speed centrifuges and cell separators for efficient
                  sample processing and isolation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">
                  Microscopy Equipment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">Microscope Image</span>
                </div>
                <p className="text-gray-600">
                  Advanced microscopes and imaging systems for detailed cellular
                  observation and analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">
                  Analytical Instruments
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">Analytical Image</span>
                </div>
                <p className="text-gray-600">
                  Spectrophotometers, analyzers, and detection systems for
                  precise measurements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">
                  Temperature Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">Incubator Image</span>
                </div>
                <p className="text-gray-600">
                  Incubators, freezers, and thermal cyclers for optimal
                  temperature regulation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">
                  Liquid Handling Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">Liquid Handling Image</span>
                </div>
                <p className="text-gray-600">
                  Automated pipetting systems and dispensers for high-throughput
                  applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-red-600">
                  Sterilization Equipment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex h-40 items-center justify-center rounded-lg bg-gray-200">
                  <span className="text-gray-400">Autoclave Image</span>
                </div>
                <p className="text-gray-600">
                  Autoclaves and sterilizers to maintain contamination-free
                  laboratory environments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-600 py-16 text-white">
        <div className="container text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Need Equipment Consultation?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-red-50">
            Our experts can help you choose the right instruments for your
            laboratory. Get personalized recommendations based on your research
            needs.
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600! hover:bg-red-50"
            asChild
          >
            <Link href="/contact">Speak with an Expert</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
