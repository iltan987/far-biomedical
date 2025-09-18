import { Card, CardContent } from "./ui/card";

export default function CustomerComments() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-black mb-8 sm:mb-12 lg:mb-16">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <Card className="transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <p className="text-gray-700 mb-4 italic text-sm sm:text-base">
                &quot;FAR&apos;s platform revolutionized how we approach
                clinical research. The collaboration tools are exceptional and
                have accelerated our drug development timeline
                significantly.&quot;
              </p>
              <div className="flex items-center">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                  style={{ backgroundColor: "#ffc30b" }}
                >
                  DM
                </div>
                <div className="ml-3">
                  <p className="text-xs sm:text-sm font-semibold text-black">
                    Dr. Maria Rodriguez
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Chief Research Officer
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <p className="text-gray-700 mb-4 italic text-sm sm:text-base">
                &quot;As an investor, FAR provides unparalleled insights into
                emerging technologies. Their research quality and market
                analysis are absolutely top-notch.&quot;
              </p>
              <div className="flex items-center">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                  style={{ backgroundColor: "#ffc30b" }}
                >
                  JC
                </div>
                <div className="ml-3">
                  <p className="text-xs sm:text-sm font-semibold text-black">
                    James Chen
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Venture Capitalist
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <p className="text-gray-700 mb-4 italic text-sm sm:text-base">
                &quot;The educational resources and networking opportunities
                through FAR have been invaluable for my research career. Highly
                recommended for any serious researcher.&quot;
              </p>
              <div className="flex items-center">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                  style={{ backgroundColor: "#ffc30b" }}
                >
                  SK
                </div>
                <div className="ml-3">
                  <p className="text-xs sm:text-sm font-semibold text-black">
                    Dr. Sarah Kim
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Research Scientist
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 4 */}
          <Card className="transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <p className="text-gray-700 mb-4 italic text-sm sm:text-base">
                &quot;FAR&apos;s patient-centered approach to medical research
                gives me confidence that new treatments are being developed with
                real people in mind. Excellent work!&quot;
              </p>
              <div className="flex items-center">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                  style={{ backgroundColor: "#ffc30b" }}
                >
                  RT
                </div>
                <div className="ml-3">
                  <p className="text-xs sm:text-sm font-semibold text-black">
                    Robert Taylor
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Patient Advocate
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 5 */}
          <Card className="transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <p className="text-gray-700 mb-4 italic text-sm sm:text-base">
                &quot;The mentorship program connected me with industry leaders.
                FAR doesn&apos;t just provide education – they provide
                opportunities for real career growth.&quot;
              </p>
              <div className="flex items-center">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                  style={{ backgroundColor: "#ffc30b" }}
                >
                  AL
                </div>
                <div className="ml-3">
                  <p className="text-xs sm:text-sm font-semibold text-black">
                    Anna Liu
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Graduate Student
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Card 6 */}
          <Card className="transform -rotate-3 hover:rotate-0 transition-transform duration-300 shadow-lg">
            <CardContent className="p-4 sm:p-6">
              <p className="text-gray-700 mb-4 italic text-sm sm:text-base">
                &quot;Working with FAR has transformed our hospital&apos;s
                approach to implementing new medical technologies. Their support
                throughout the process has been exceptional.&quot;
              </p>
              <div className="flex items-center">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm"
                  style={{ backgroundColor: "#ffc30b" }}
                >
                  MP
                </div>
                <div className="ml-3">
                  <p className="text-xs sm:text-sm font-semibold text-black">
                    Dr. Michael Park
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Hospital Director
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
