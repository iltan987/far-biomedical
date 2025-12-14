import Link from "next/link";
import { FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-border/40 bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Logo and Brand */}
          <div className="flex flex-col space-y-4 lg:col-span-3">
            <div className="flex items-center space-x-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-red-700 to-red-900 shadow-sm">
                <span className="text-2xl font-bold text-white">FB</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm">
                Get better with,
              </span>
              <span className="text-xl font-bold text-red-600">FAR Better</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Making scientific research more accessible through innovative
              solutions.
            </p>
          </div>

          {/* About Us */}
          <div className="flex flex-col space-y-3 sm:space-y-4 lg:col-span-3">
            <h3 className="text-base font-semibold sm:text-lg">About Us</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about/board"
                className="text-muted-foreground group w-fit text-sm transition-all hover:translate-x-1 hover:text-red-600 focus-visible:translate-x-1 focus-visible:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span className="relative">
                  Board
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-red-600 transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                href="/about/team"
                className="text-muted-foreground group w-fit text-sm transition-all hover:translate-x-1 hover:text-red-600 focus-visible:translate-x-1 focus-visible:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span className="relative">
                  Team
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-red-600 transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                href="/about/locations"
                className="text-muted-foreground group w-fit text-sm transition-all hover:translate-x-1 hover:text-red-600 focus-visible:translate-x-1 focus-visible:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span className="relative">
                  Locations
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-red-600 transition-all group-hover:w-full"></span>
                </span>
              </Link>
            </nav>
          </div>

          {/* Privacy */}
          <div className="flex flex-col space-y-3 sm:space-y-4 lg:col-span-3">
            <h3 className="text-base font-semibold sm:text-lg">Privacy</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/privacy"
                className="text-muted-foreground group w-fit text-sm transition-all hover:translate-x-1 hover:text-red-600 focus-visible:translate-x-1 focus-visible:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span className="relative">
                  Privacy Statement
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-red-600 transition-all group-hover:w-full"></span>
                </span>
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground group w-fit text-sm transition-all hover:translate-x-1 hover:text-red-600 focus-visible:translate-x-1 focus-visible:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:outline-none"
              >
                <span className="relative">
                  Terms and Conditions
                  <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-red-600 transition-all group-hover:w-full"></span>
                </span>
              </Link>
            </nav>
          </div>

          {/* Connect With Us */}
          <div className="flex flex-col space-y-3 sm:space-y-4 lg:col-span-3">
            <h3 className="text-base font-semibold sm:text-lg">
              Connect With Us
            </h3>
            <p className="text-muted-foreground text-sm">
              Follow us on social media or get in touch.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-110 hover:bg-red-600 hover:text-white focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-110 hover:bg-red-600 hover:text-white focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-110 hover:bg-red-600 hover:text-white focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <Link
                href="/contact"
                className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg transition-all hover:scale-110 hover:bg-red-600 hover:text-white focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label="Contact Us"
              >
                <FaEnvelope className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6 sm:my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:gap-4 md:text-left">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} FAR Better. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm">
            Making scientific research more accessible
          </p>
        </div>
      </div>
    </footer>
  );
}
