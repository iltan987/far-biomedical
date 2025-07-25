import Link from "next/link";
import { Users, Target, Award, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">F</span>
              </div>
              <span className="text-xl font-bold">Far</span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/#features"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Features
              </Link>
              <Link
                href="/products"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Products
              </Link>
              <Link href="/about" className="text-gray-900 font-medium">
                About
              </Link>
              <Link
                href="/#contact"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign In</Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">About</span>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6">About Far</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Pioneering the Future of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {" "}
                  Healthcare Innovation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Founded in 2020, Far has been at the forefront of biomedical
                technology innovation, developing cutting-edge solutions that
                transform how healthcare professionals work and patients receive
                care.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  To democratize access to advanced biomedical technologies and
                  enable healthcare professionals worldwide to deliver better
                  patient outcomes through innovative data-driven solutions.
                </p>
                <p className="text-gray-600">
                  We believe that by harnessing the power of artificial
                  intelligence, machine learning, and cloud computing, we can
                  bridge the gap between cutting-edge research and practical
                  healthcare applications.
                </p>
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  To become the world&apos;s leading platform for biomedical
                  innovation, where researchers, clinicians, and healthcare
                  organizations collaborate to solve humanity&apos;s greatest
                  health challenges.
                </p>
                <p className="text-gray-600">
                  We envision a future where every healthcare decision is
                  informed by comprehensive data analysis, personalized
                  insights, and predictive modeling that enhances both
                  individual and population health outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide our work and define our company
                culture.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="mb-3">Excellence</CardTitle>
                  <CardDescription>
                    We strive for excellence in everything we do, from product
                    development to customer service.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="mb-3">Collaboration</CardTitle>
                  <CardDescription>
                    We believe in the power of collaboration to drive innovation
                    and create meaningful impact.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-purple-600" />
                  </div>
                  <CardTitle className="mb-3">Innovation</CardTitle>
                  <CardDescription>
                    We constantly push boundaries and explore new possibilities
                    in biomedical technology.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-orange-600" />
                  </div>
                  <CardTitle className="mb-3">Impact</CardTitle>
                  <CardDescription>
                    We&apos;re driven by the desire to make a positive impact on
                    global health outcomes.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experienced leaders from healthcare, technology, and research
                backgrounds.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder-ceo.jpg" />
                    <AvatarFallback className="text-xl">AK</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mb-1">Dr. Alex Kim</CardTitle>
                  <p className="text-blue-600 font-medium mb-3">
                    CEO & Co-Founder
                  </p>
                  <CardDescription>
                    Former Director of Biomedical Informatics at Stanford
                    Medicine. PhD in Computer Science with focus on healthcare
                    AI.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder-cto.jpg" />
                    <AvatarFallback className="text-xl">SP</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mb-1">Sarah Patel</CardTitle>
                  <p className="text-blue-600 font-medium mb-3">
                    CTO & Co-Founder
                  </p>
                  <CardDescription>
                    Former Senior Engineering Manager at Google Health. MS in
                    Bioengineering with 15+ years in healthcare technology.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder-cmo.jpg" />
                    <AvatarFallback className="text-xl">MR</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mb-1">Dr. Michael Rodriguez</CardTitle>
                  <p className="text-blue-600 font-medium mb-3">
                    Chief Medical Officer
                  </p>
                  <CardDescription>
                    Board-certified physician and researcher with 20+ years
                    experience in clinical practice and medical device
                    development.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder-cpo.jpg" />
                    <AvatarFallback className="text-xl">EL</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mb-1">Emily Liu</CardTitle>
                  <p className="text-blue-600 font-medium mb-3">
                    Chief Product Officer
                  </p>
                  <CardDescription>
                    Former Product Lead at Microsoft Healthcare. Expert in UX
                    design and product strategy for enterprise healthcare
                    solutions.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder-cfo.jpg" />
                    <AvatarFallback className="text-xl">DJ</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mb-1">David Johnson</CardTitle>
                  <p className="text-blue-600 font-medium mb-3">
                    Chief Financial Officer
                  </p>
                  <CardDescription>
                    Former CFO at multiple healthcare startups. CPA with
                    extensive experience in venture capital and strategic
                    partnerships.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder-cso.jpg" />
                    <AvatarFallback className="text-xl">RC</AvatarFallback>
                  </Avatar>
                  <CardTitle className="mb-1">Dr. Rachel Chen</CardTitle>
                  <p className="text-blue-600 font-medium mb-3">
                    Chief Science Officer
                  </p>
                  <CardDescription>
                    Former Principal Scientist at Genentech. PhD in Molecular
                    Biology with expertise in computational drug discovery and
                    precision medicine.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Our Impact in Numbers
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    10,000+
                  </div>
                  <div className="text-lg opacity-90">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
                  <div className="text-lg opacity-90">Healthcare Partners</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    100M+
                  </div>
                  <div className="text-lg opacity-90">
                    Data Points Processed
                  </div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
                  <div className="text-lg opacity-90">Countries Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Join Us in Transforming Healthcare
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Whether you&apos;re a healthcare professional, researcher, or
                technology enthusiast, there are many ways to be part of our
                mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold">Far</span>
              </div>
              <p className="text-gray-400">
                Revolutionizing healthcare through innovative biomedical
                solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Analytics Pro
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Diagnostics AI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cloud Suite
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Far. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
