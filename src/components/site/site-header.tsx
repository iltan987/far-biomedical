import Image from "next/image";
import Link from "next/link";

import { DesktopNav } from "@/components/site/desktop-nav";
import { HeaderWrapper } from "@/components/site/header-wrapper";
import { MobileNav } from "@/components/site/mobile-nav";
import type {
  ResolvedSiteSettings,
  SiteSettingsAttrs,
} from "@/sanity/lib/site-settings";

export function SiteHeader({
  settings,
  attrs,
}: {
  settings: ResolvedSiteSettings;
  attrs?: SiteSettingsAttrs;
}) {
  return (
    <HeaderWrapper>
      <div className="container mx-auto flex h-(--site-header-height) items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" data-sanity={attrs?.logoText}>
          <Image
            src="/logo.svg"
            alt={settings.siteName}
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span className="hidden text-xl font-bold sm:inline-block">
            {settings.logoText}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <MobileNav settings={settings} attrs={attrs} />
      </div>
    </HeaderWrapper>
  );
}
