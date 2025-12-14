import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-950 via-black to-red-950 py-24 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              Our Services
            </h1>
            <p className="text-xl text-red-100">
              We offer comprehensive laboratory services including the
              processing of blood samples into PBMCs, isolation of target cells
              with high efficiency, and the provision of high-quality
              microscopic imaging. Our services are available nationwide across
              Türkiye. For international clients, we provide remote technical
              support to ensure seamless guidance and continuity throughout the
              workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xl leading-relaxed text-gray-700">
              We are committed to delivering{" "}
              <strong className="text-red-600">reliable</strong>,{" "}
              <strong className="text-red-600">efficient</strong>, and{" "}
              <strong className="text-red-600">scientifically robust</strong>{" "}
              solutions for our partners and clients.
            </p>
          </div>
        </div>
      </section>

      {/* Target Cell Isolation Process */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex h-80 items-center justify-center rounded-lg bg-gray-200 lg:order-1">
              <span className="text-gray-400">
                Cell Isolation Process Image
              </span>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-4xl font-bold text-gray-900">
                Target Cell Isolation
              </h2>
              <p className="text-lg text-gray-700">
                Our laboratory provides a comprehensive and high-precision cell
                isolation workflow designed to meet research, clinical, and
                industry-level requirements. Each step is performed under
                standardized quality protocols to ensure consistency,
                reliability, and scientific accuracy.
              </p>
            </div>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-red-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-xl font-bold text-white">
                  1
                </div>
                <CardTitle className="text-red-600">
                  Sample Preparation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Eligible blood samples are collected, stabilized, and
                  processed under controlled conditions to maintain sample
                  integrity and ensure optimal downstream performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-xl font-bold text-white">
                  2
                </div>
                <CardTitle className="text-red-600">PBMC Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Peripheral blood mononuclear cells (PBMCs) are separated using
                  density-gradient centrifugation techniques such as Ficoll,
                  allowing us to obtain a clean and viable mononuclear cell
                  fraction.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-xl font-bold text-white">
                  3
                </div>
                <CardTitle className="text-red-600">
                  Target Cell Isolation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Specific cell populations are isolated using advanced methods
                  tailored to project requirements. In this process, we use our
                  proprietary device to ensure high efficiency, precision, and
                  reproducibility.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-xl font-bold text-white">
                  4
                </div>
                <CardTitle className="text-red-600">
                  Purification & Preparation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Isolated cells are washed and purified using appropriate
                  buffer systems to remove unwanted components and prepare the
                  cells for analysis or downstream applications.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-xl font-bold text-white">
                  5
                </div>
                <CardTitle className="text-red-600">
                  Quality Control & Imaging
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  All samples undergo viability assessment, purity evaluation,
                  and high-resolution microscopic imaging to ensure the highest
                  standards of quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-600 text-xl font-bold text-white">
                  6
                </div>
                <CardTitle className="text-red-600">
                  Delivery & Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Depending on client requirements, final samples are analyzed,
                  documented, stored under controlled conditions, or prepared
                  for secure delivery.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700">
              Our services are available throughout{" "}
              <strong className="text-red-600">Türkiye</strong>, and for
              international clients, we provide{" "}
              <strong className="text-red-600">remote technical support</strong>{" "}
              to ensure seamless operation and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Laboratory Supply Services */}
      <section className="bg-linear-to-br from-gray-900 to-red-950 py-16 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-bold">
                Laboratory Supply Services
              </h2>
              <p className="text-xl leading-relaxed text-red-50">
                We provide comprehensive supply services for research
                laboratories. Whatever your needs may be, our specialized team
                identifies high-quality, specific products from around the world
                and delivers them to you in a manner tailored to your
                requirements.
              </p>
            </div>
            <div className="flex h-80 items-center justify-center rounded-lg bg-white/10 backdrop-blur">
              <span className="text-white/50">Laboratory Supplies Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left text-lg font-semibold">
                What services do you provide for cell isolation?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                We offer comprehensive cell isolation services, including PBMC
                separation, target cell isolation using our proprietary device,
                purification, quality control, and microscopic imaging. Our
                workflow ensures high efficiency, precision, and
                reproducibility.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left text-lg font-semibold">
                Can your services be used internationally?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                Yes. While we provide our full laboratory services throughout
                Türkiye, we also offer remote technical support for
                international clients to guide them through procedures and
                protocols.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left text-lg font-semibold">
                How can I contact your team for inquiries or support?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600">
                You can contact us directly via our website contact form, email,
                or phone. For international clients, we also provide online
                technical support to ensure smooth communication and guidance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
