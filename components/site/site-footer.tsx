import Link from "next/link";

import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
  return (
    <footer className="border-border/40 bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Brand */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-red-700 to-red-900">
                <span className="text-2xl font-bold text-white">FB</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-muted-foreground text-sm">
                Get better with,
              </span>
              <span className="text-xl font-bold text-red-600">FAR Better</span>
            </div>
          </div>

          {/* About Us */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about/board"
                className="text-muted-foreground w-fit text-sm transition-colors hover:text-red-600"
              >
                Board
              </Link>
              <Link
                href="/about/team"
                className="text-muted-foreground w-fit text-sm transition-colors hover:text-red-600"
              >
                Team
              </Link>
              <Link
                href="/about/locations"
                className="text-muted-foreground w-fit text-sm transition-colors hover:text-red-600"
              >
                Locations
              </Link>
            </nav>
          </div>

          {/* Privacy */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Privacy</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                href="/privacy"
                className="text-muted-foreground w-fit text-sm transition-colors hover:text-red-600"
              >
                Privacy Statement
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground w-fit text-sm transition-colors hover:text-red-600"
              >
                Terms and Conditions
              </Link>
            </nav>
          </div>

          {/* Social Media */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Social Media</h3>
            <nav className="flex flex-col space-y-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground w-fit text-sm transition-colors hover:text-red-600"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground w-fit text-sm transition-colors hover:text-red-600"
              >
                Instagram
              </a>
              <Link
                href="/contact"
                className="text-muted-foreground w-fit text-sm transition-colors hover:text-red-600"
              >
                Reach Out
              </Link>
            </nav>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} FAR Better. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Making scientific research more accessible
          </p>
        </div>
      </div>
    </footer>
  );
}
