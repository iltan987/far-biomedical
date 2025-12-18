import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

import { Separator } from "@/components/ui/separator";
import { footerLinks } from "@/data/navigation";
import { siteConfig } from "@/lib/constants";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="FAR Better Bio"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">FAR Better</span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm">
              Advanced blood-cell separation and apheretic blood filtration
              technologies for research and clinical applications.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-muted-foreground hover:text-primary flex items-start gap-2 text-sm transition-colors"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="text-muted-foreground flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {siteConfig.contact.address.line1}
                  <br />
                  {siteConfig.contact.address.city},{" "}
                  {siteConfig.contact.address.country}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Copyright */}
        <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
          <p>&copy; {currentYear} FAR Better Bio. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
