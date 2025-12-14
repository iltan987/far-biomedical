import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-950 via-black to-red-950 py-24 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              Contact Us
            </h1>
            <p className="text-xl text-red-100">
              Get in touch with our team. We&apos;re here to help with your
              laboratory needs and answer any questions you may have.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-16">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Get In Touch
              </h2>
              <p className="mb-8 text-gray-600">
                Whether you need product information, technical support, or want
                to discuss a partnership, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <span>📧</span> Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">info@farbetter.com</p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <span>📱</span> Phone
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">+90 (XXX) XXX-XXXX</p>
                  </CardContent>
                </Card>

                <Card className="border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-red-600">
                      <span>📍</span> Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Türkiye
                      <br />
                      International support available
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div>
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">
                    Send us a message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll get back to you as
                    soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1 block text-sm font-medium text-gray-700"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-red-600 focus:outline-none"
                        placeholder="Your message..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700"
                    >
                      Send Message
                    </Button>
                  </form>
                  <p className="mt-4 text-sm text-gray-500">
                    Note: Email functionality will be implemented in the next
                    phase.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              Technical Support
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">
                    Domestic Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Our full laboratory services are available throughout
                    Türkiye, including on-site support and consultation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-600">
                    International Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Remote technical support is available for international
                    clients to guide through procedures and protocols.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
