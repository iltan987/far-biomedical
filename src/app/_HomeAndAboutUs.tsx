import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Menu } from "lucide-react";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Image from "next/image";

export default function HomeAboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Menu />

          {/* Desktop Header */}
          <div className="hidden lg:flex items-center justify-center h-16 relative">
            {/* Left side navigation */}
            <div className="flex items-center space-x-8 absolute left-0 h-full">
              <div className="flex items-center space-x-6">
                <Button
                  variant="ghost"
                  className="text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
                  style={{ backgroundColor: "#ffc30b" }}
                >
                  <Link href="/about-us">About us</Link>
                </Button>
                <Button
                  variant="ghost"
                  className="text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
                  style={{ backgroundColor: "#ffc30b" }}
                >
                  Products
                </Button>
                <Button
                  variant="ghost"
                  className="text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
                  style={{ backgroundColor: "#ffc30b" }}
                >
                  Company
                </Button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="text-gray-600 hover:text-black"
              >
                <FaSearch className="w-5 h-5" />
              </Button>
            </div>

            {/* Centered FAR Better logo */}
            <div className="text-2xl font-bold text-black absolute left-1/2 transform -translate-x-1/2">
              FAR Better
            </div>

            {/* Right side navigation */}
            <div className="flex items-center space-x-6 absolute right-0 h-full">
              <Button
                variant="ghost"
                className="text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
                style={{ backgroundColor: "#ffc30b" }}
              >
                Contact
              </Button>
              {/* <Button
                variant="ghost"
                className="text-white font-medium px-4 py-2 rounded-md transition-colors duration-200"
                style={{ backgroundColor: "#ffc30b" }}
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
              </Button> */}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* First Section - What is FAR */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
                  About us
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  FAR Better is a health tech company dedicated to advancing
                  biomedical and biotechnology research. We create automated
                  systems and research kits that streamline routine laboratory
                  procedures, allowing scientists to focus on what truly
                  matters: their discoveries rather than being buried under
                  repetitive pre-work.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Get Better with FAR Better
                </p>
              </div>
              <div className="flex justify-center mt-8 lg:mt-0">
                <div
                  className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full flex items-center justify-center animate-spin"
                  style={{ animationDuration: "20s" }}
                >
                  <Image
                    src="/far-logo.svg"
                    alt="FAR Logo"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Type Buttons */}
        <section className="py-8 sm:py-10 lg:py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {[
                "Request a demo",
                "Join our team",
                "Collaborate with us",
                "Support us",
                "Reach out to us",
              ].map((type) => (
                <Button
                  key={type}
                  variant="outline"
                  className="px-4 sm:px-6 lg:px-8 py-2 sm:py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-black hover:text-black transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Second Section - F.A.R */}
        <section
          className="py-12 sm:py-16 lg:py-20"
          style={{ backgroundColor: "#bac5cc" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="text-left p-4 sm:p-6">
                  <p className="text-white leading-relaxed text-justify text-sm sm:text-base">
                    <span
                      className="float-left text-5xl sm:text-6xl lg:text-8xl font-bold leading-none mr-2 sm:mr-3 mt-1"
                      style={{ color: "#ffc30b", lineHeight: "0.8" }}
                    >
                      F
                    </span>
                    orward-thinking innovation drives everything we do at FAR.
                    We pioneer revolutionary solutions that anticipate future
                    needs and challenges before they emerge. Our visionary
                    approach ensures that every project we undertake is designed
                    with tomorrow&apos;s possibilities in mind, creating lasting
                    impact for generations to come.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button>MiniCeive</Button>
                  <Button variant="outline" className="ml-2">
                    AutoCeive
                  </Button>
                  <Button className="ml-2" disabled>
                    AphereCeive
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="text-left p-4 sm:p-6">
                  <p className="text-white leading-relaxed text-justify text-sm sm:text-base">
                    <span
                      className="float-left text-5xl sm:text-6xl lg:text-8xl font-bold leading-none mr-2 sm:mr-3 mt-1"
                      style={{ color: "#ffc30b", lineHeight: "0.8" }}
                    >
                      A
                    </span>
                    dvanced research capabilities combine cutting-edge
                    technology with world-class expertise to push the boundaries
                    of what&apos;s possible. Through rigorous scientific
                    methodology and innovative thinking, we transform
                    theoretical concepts into practical solutions that address
                    real-world challenges and create meaningful change.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-transparent border-none shadow-none">
                <CardContent className="text-left p-4 sm:p-6">
                  <p className="text-white leading-relaxed text-justify text-sm sm:text-base">
                    <span
                      className="float-left text-5xl sm:text-6xl lg:text-8xl font-bold leading-none mr-2 sm:mr-3 mt-1"
                      style={{ color: "#ffc30b", lineHeight: "0.8" }}
                    >
                      R
                    </span>
                    eal impact is at the heart of every innovation we develop.
                    Each breakthrough is designed to create measurable, positive
                    change in people&apos;s lives. From healthcare advances to
                    technological innovations, we focus on solutions that
                    matter, ensuring our research translates into tangible
                    benefits for society and the world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Third Section - Customer Comments */}
        {/* <CustomerComments /> */}
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-6 lg:mb-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3
                className="text-lg sm:text-xl font-bold mb-3 sm:mb-4"
                style={{ color: "#ffc30b" }}
              >
                FAR Better
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                FAR: Filtrate, Alternate, Return <br />
                Get Better with FAR Better
              </p>
            </div>
            {/* <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Research
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white text-sm sm:text-base"
                  >
                    R&D Projects
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white text-sm sm:text-base"
                  >
                    Publications
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white text-sm sm:text-base"
                  >
                    Collaborations
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Products
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white text-sm sm:text-base"
                  >
                    Platform
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white text-sm sm:text-base"
                  >
                    Tools
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white text-sm sm:text-base"
                  >
                    Services
                  </Button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Company
              </h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white text-sm sm:text-base"
                  >
                    About Us
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white text-sm sm:text-base"
                  >
                    Careers
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="p-0 h-auto text-gray-400 hover:text-white text-sm sm:text-base"
                  >
                    Contact
                  </Button>
                </li>
              </ul>
            </div> */}
          </div>

          <div className="border-t border-gray-800 pt-6 lg:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm sm:text-base">
              © 2025 FAR. All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white p-1 sm:p-2"
              >
                <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white p-1 sm:p-2"
              >
                <FaTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white p-1 sm:p-2"
              >
                <FaLinkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white p-1 sm:p-2"
              >
                <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white p-1 sm:p-2"
              >
                <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
