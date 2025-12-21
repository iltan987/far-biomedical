import Image from "next/image";
import Link from "next/link";

import { DesktopNav } from "@/components/site/desktop-nav";
import { HeaderWrapper } from "@/components/site/header-wrapper";
import { MobileNav } from "@/components/site/mobile-nav";

export function SiteHeader() {
  return (
    <HeaderWrapper>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="FAR Better Bio"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="hidden text-xl font-bold sm:inline-block">
            FAR Better
          </span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </HeaderWrapper>
  );
}
