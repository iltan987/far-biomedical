import {
  FaSearch,
  FaShoppingCart,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side navigation */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  R&D
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  Products
                </Button>
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:text-black font-medium"
                >
                  News
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-black"
              >
                <FaSearch className="w-5 h-5" />
              </Button>

              <div className="text-2xl font-bold text-black ml-4">FAR</div>
            </div>

            {/* Right side navigation */}
            <div className="flex items-center space-x-6">
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-black font-medium"
              >
                Company
              </Button>
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-black font-medium"
              >
                Contact
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800">
                Sign in
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-black"
              >
                <FaShoppingCart className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* First Section - What is FAR */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-black mb-6">
                  What is FAR?
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  FAR represents the forefront of innovation in research and
                  development. We bridge the gap between cutting-edge scientific
                  discoveries and practical applications that transform
                  industries and improve lives.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our comprehensive platform connects researchers, healthcare
                  professionals, investors, and students in a collaborative
                  ecosystem designed to accelerate breakthrough innovations and
                  bring them to market faster than ever before.
                </p>
              </div>
              <div className="flex justify-center">
                <div
                  className="w-64 h-64 bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500 rounded-full flex items-center justify-center animate-spin"
                  style={{ animationDuration: "20s" }}
                >
                  <div className="w-48 h-48 bg-white rounded-full flex items-center justify-center">
                    <div
                      className="text-6xl font-bold"
                      style={{ color: "#ffc30b" }}
                    >
                      ∞
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Type Buttons */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {["Investor", "Doctor", "Researcher", "Patient", "Student"].map(
                (type) => (
                  <Button
                    key={type}
                    variant="outline"
                    className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-black hover:text-black transition-all duration-300 hover:shadow-lg"
                  >
                    {type}
                  </Button>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Second Section - F.A.R */}
        <section className="py-20" style={{ backgroundColor: "#bac5cc" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <Card className="bg-transparent border-none shadow-none">
                <CardHeader className="text-center pb-2">
                  <div
                    className="text-8xl font-bold text-white mb-6"
                    style={{ color: "#ffc30b" }}
                  >
                    F
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Forward-Thinking
                  </h3>
                  <p className="text-white leading-relaxed">
                    We pioneer innovative solutions that anticipate future needs
                    and challenges. Our forward-thinking approach ensures that
                    every project we undertake is designed with tomorrow&apos;s
                    possibilities in mind.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-transparent border-none shadow-none">
                <CardHeader className="text-center pb-2">
                  <div
                    className="text-8xl font-bold text-white mb-6"
                    style={{ color: "#ffc30b" }}
                  >
                    A
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Advanced Research
                  </h3>
                  <p className="text-white leading-relaxed">
                    Our advanced research capabilities combine cutting-edge
                    technology with world-class expertise. We push the
                    boundaries of what&apos;s possible through rigorous
                    scientific methodology and innovative thinking.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-transparent border-none shadow-none">
                <CardHeader className="text-center pb-2">
                  <div
                    className="text-8xl font-bold text-white mb-6"
                    style={{ color: "#ffc30b" }}
                  >
                    R
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Real Impact
                  </h3>
                  <p className="text-white leading-relaxed">
                    Every innovation we develop is designed to create real,
                    measurable impact in people&apos;s lives. From healthcare
                    breakthroughs to technological advances, we focus on
                    solutions that matter.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Third Section - Customer Comments */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-black mb-16">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Card className="transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">
                    &quot;FAR&apos;s platform revolutionized how we approach
                    clinical research. The collaboration tools are exceptional
                    and have accelerated our drug development timeline
                    significantly.&quot;
                  </p>
                  <div className="flex items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: "#ffc30b" }}
                    >
                      DM
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-black">
                        Dr. Maria Rodriguez
                      </p>
                      <p className="text-sm text-gray-600">
                        Chief Research Officer
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="transform -rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">
                    &quot;As an investor, FAR provides unparalleled insights
                    into emerging technologies. Their research quality and
                    market analysis are absolutely top-notch.&quot;
                  </p>
                  <div className="flex items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: "#ffc30b" }}
                    >
                      JC
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-black">
                        James Chen
                      </p>
                      <p className="text-sm text-gray-600">
                        Venture Capitalist
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">
                    &quot;The educational resources and networking opportunities
                    through FAR have been invaluable for my research career.
                    Highly recommended for any serious researcher.&quot;
                  </p>
                  <div className="flex items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: "#ffc30b" }}
                    >
                      SK
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-black">
                        Dr. Sarah Kim
                      </p>
                      <p className="text-sm text-gray-600">
                        Research Scientist
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className="transform -rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">
                    &quot;FAR&apos;s patient-centered approach to medical
                    research gives me confidence that new treatments are being
                    developed with real people in mind. Excellent work!&quot;
                  </p>
                  <div className="flex items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: "#ffc30b" }}
                    >
                      RT
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-black">
                        Robert Taylor
                      </p>
                      <p className="text-sm text-gray-600">Patient Advocate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 5 */}
              <Card className="transform rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">
                    &quot;The mentorship program connected me with industry
                    leaders. FAR doesn&apos;t just provide education – they
                    provide opportunities for real career growth.&quot;
                  </p>
                  <div className="flex items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: "#ffc30b" }}
                    >
                      AL
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-black">
                        Anna Liu
                      </p>
                      <p className="text-sm text-gray-600">Graduate Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 6 */}
              <Card className="transform -rotate-3 hover:rotate-0 transition-transform duration-300 shadow-lg">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">
                    &quot;Working with FAR has transformed our hospital&apos;s
                    approach to implementing new medical technologies. Their
                    support throughout the process has been exceptional.&quot;
                  </p>
                  <div className="flex items-center">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                      style={{ backgroundColor: "#ffc30b" }}
                    >
                      MP
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-semibold text-black">
                        Dr. Michael Park
                      </p>
                      <p className="text-sm text-gray-600">Hospital Director</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#ffc30b" }}
              >
                FAR
              </h3>
              <p className="text-gray-400">
                Advancing research and development for a better tomorrow.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Research</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white"
                  >
                    R&D Projects
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white"
                  >
                    Publications
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white"
                  >
                    Collaborations
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white"
                  >
                    Platform
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white"
                  >
                    Tools
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white"
                  >
                    Services
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white"
                  >
                    About Us
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white"
                  >
                    Careers
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white"
                  >
                    Contact
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2025 FAR. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white p-2"
              >
                <FaFacebook className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white p-2"
              >
                <FaTwitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white p-2"
              >
                <FaLinkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white p-2"
              >
                <FaInstagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white p-2"
              >
                <FaYoutube className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
