"use client";

import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-red-600 to-red-800">
              <span className="text-xl font-bold text-white">FB</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm leading-tight font-semibold">
                Get Better with
              </span>
              <span className="text-lg leading-tight font-bold text-red-600">
                FAR Better
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-100 gap-3 p-1 md:grid-cols-1">
                  <ListItem
                    href="/products/laboratory-consumables"
                    title="Laboratory Consumables"
                  >
                    High-quality laboratory materials and supplies for your
                    research needs
                  </ListItem>
                  <ListItem
                    href="/products/laboratory-instruments"
                    title="Laboratory Instruments"
                  >
                    Advanced laboratory tools and equipment for precise research
                  </ListItem>
                  <ListItem href="/products" title="Our Products">
                    Explore our complete range of innovative products including
                    AutoCeive
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/services" className={navigationMenuTriggerStyle()}>
                  Services
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/about" className={navigationMenuTriggerStyle()}>
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

const ListItem = ({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none",
            className
          )}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
