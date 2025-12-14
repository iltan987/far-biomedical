import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-950 via-black to-red-950 py-24 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-5xl font-bold tracking-tight">
              About FAR Better
            </h1>
            <p className="text-xl text-red-100">
              Making scientific research more accessible through innovative
              laboratory solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-4xl font-bold text-gray-900">
              Our Mission
            </h2>
            <p className="mb-8 text-center text-xl leading-relaxed text-gray-700">
              <strong className="text-red-600">
                FAR is our way of taking responsibility for making scientific
                research more accessible.
              </strong>
            </p>
            <p className="text-center text-lg leading-relaxed text-gray-600">
              We believe that innovation should not be slowed down by repetitive
              groundwork. Our R&D mission is to develop tools that streamline
              the most demanding parts of laboratory work — so scientists can
              focus on what truly matters: discovery and progress.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-red-50 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Our Vision
            </h2>
            <p className="text-xl leading-relaxed text-gray-700">
              To build{" "}
              <strong>cell-targeted blood filtration and processing</strong>{" "}
              devices engineered for{" "}
              <strong>advanced apheresis and gene therapies</strong>. By
              supporting both research and future clinical applications, we aim
              to help bridge the gap between today&apos;s capabilities and
              tomorrow&apos;s cures.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
            Our Values
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-red-200 text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Continuously pushing boundaries to develop cutting-edge
                  solutions that advance scientific research.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">
                  Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Making advanced laboratory tools and services available to
                  researchers worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Delivering reliable, efficient, and scientifically robust
                  solutions for our partners and clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="bg-linear-to-br from-gray-900 to-red-950 py-16 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-4xl font-bold">Our Team</h2>
            <p className="mb-8 text-xl text-red-50">
              A dedicated group of scientists, engineers, and researchers
              committed to making a difference in the field of laboratory
              research.
            </p>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="border-white/20 bg-white/10 text-white backdrop-blur">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-red-600">
                    <span className="text-3xl">👤</span>
                  </div>
                  <CardTitle>Leadership Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Experienced leaders driving our vision forward
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/20 bg-white/10 text-white backdrop-blur">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-red-600">
                    <span className="text-3xl">🔬</span>
                  </div>
                  <CardTitle>Research & Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Scientists and engineers creating innovative solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="border-white/20 bg-white/10 text-white backdrop-blur">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-red-600">
                    <span className="text-3xl">🤝</span>
                  </div>
                  <CardTitle>Support Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Dedicated professionals ensuring customer satisfaction
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-3xl font-semibold text-gray-900 italic">
              &quot;Cure is not far away, as long as you and I are willing to
              take things... a little further.&quot;
            </p>
            <footer className="text-lg text-red-600">— CEO, FAR Better</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
