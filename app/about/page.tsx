import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-red-950 via-black to-red-950 py-16 text-white sm:py-24 md:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              About FAR Better
            </h1>
            <p className="text-lg text-red-100 sm:text-xl">
              Making scientific research more accessible through innovative
              laboratory solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl">
              Our Mission
            </h2>
            <p className="mb-6 text-center text-lg leading-relaxed text-gray-700 sm:mb-8 sm:text-xl">
              <strong className="text-red-600">
                FAR is our way of taking responsibility for making scientific
                research more accessible.
              </strong>
            </p>
            <p className="text-center text-base leading-relaxed text-gray-600 sm:text-lg">
              We believe that innovation should not be slowed down by repetitive
              groundwork. Our R&D mission is to develop tools that streamline
              the most demanding parts of laboratory work — so scientists can
              focus on what truly matters: discovery and progress.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="bg-red-50 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl">
              Our Vision
            </h2>
            <p className="text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl">
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
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:mb-12 sm:text-3xl md:text-4xl">
            Our Values
          </h2>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            <Card className="group border-red-200 text-center transition-all focus-within:ring-2 focus-within:ring-red-400 focus-within:ring-offset-2 hover:scale-105 hover:border-red-400 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-red-600 transition-colors group-hover:text-red-700 sm:text-2xl">
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 sm:text-base">
                  Continuously pushing boundaries to develop cutting-edge
                  solutions that advance scientific research.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-red-200 text-center transition-all focus-within:ring-2 focus-within:ring-red-400 focus-within:ring-offset-2 hover:scale-105 hover:border-red-400 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-red-600 transition-colors group-hover:text-red-700 sm:text-2xl">
                  Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 sm:text-base">
                  Making advanced laboratory tools and services available to
                  researchers worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="group border-red-200 text-center transition-all focus-within:ring-2 focus-within:ring-red-400 focus-within:ring-offset-2 hover:scale-105 hover:border-red-400 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-red-600 transition-colors group-hover:text-red-700 sm:text-2xl">
                  Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 sm:text-base">
                  Delivering reliable, efficient, and scientifically robust
                  solutions for our partners and clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="bg-linear-to-br from-gray-900 to-red-950 py-12 text-white sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-2xl font-bold sm:mb-6 sm:text-3xl md:text-4xl">
              Our Team
            </h2>
            <p className="mb-6 text-base text-red-50 sm:mb-8 sm:text-lg md:text-xl">
              A dedicated group of scientists, engineers, and researchers
              committed to making a difference in the field of laboratory
              research.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
              <Card className="group border-white/20 bg-white/10 text-white backdrop-blur transition-all focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:scale-110 sm:h-24 sm:w-24">
                    <span className="text-2xl sm:text-3xl">👤</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">
                    Leadership Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/80 sm:text-base">
                    Experienced leaders driving our vision forward
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-white/20 bg-white/10 text-white backdrop-blur transition-all focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:scale-110 sm:h-24 sm:w-24">
                    <span className="text-2xl sm:text-3xl">🔬</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">
                    Research & Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/80 sm:text-base">
                    Scientists and engineers creating innovative solutions
                  </p>
                </CardContent>
              </Card>

              <Card className="group border-white/20 bg-white/10 text-white backdrop-blur transition-all focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:scale-105 hover:bg-white/20 hover:shadow-2xl">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-red-600 transition-transform group-hover:scale-110 sm:h-24 sm:w-24">
                    <span className="text-2xl sm:text-3xl">🤝</span>
                  </div>
                  <CardTitle className="text-lg sm:text-xl">
                    Support Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/80 sm:text-base">
                    Dedicated professionals ensuring customer satisfaction
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <blockquote className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-xl font-semibold text-gray-900 italic sm:text-2xl md:text-3xl">
              &quot;Cure is not far away, as long as you and I are willing to
              take things... a little further.&quot;
            </p>
            <footer className="text-base text-red-600 sm:text-lg">
              — CEO, FAR Better
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
