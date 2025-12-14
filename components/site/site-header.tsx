"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="flex items-center space-x-3 transition-opacity hover:opacity-80"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-red-600 to-red-800 shadow-sm">
              <span className="text-xl font-bold text-white">FB</span>
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-sm leading-tight font-semibold">
                Get Better with
              </span>
              <span className="text-lg leading-tight font-bold text-red-600">
                FAR Better
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
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

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-75 sm:w-100">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col space-y-1">
              <Link
                href="/"
                className="rounded-lg px-4 py-3 text-base font-medium transition-all hover:bg-red-50 hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Products with submenu */}
              <div className="flex flex-col">
                <div className="text-foreground px-4 py-3 text-base font-medium">
                  Products
                </div>
                <div className="mt-1 ml-4 flex flex-col space-y-1 border-l-2 border-red-100 pl-4">
                  <Link
                    href="/products/laboratory-consumables"
                    className="rounded-md px-3 py-2 text-sm transition-all hover:bg-red-50 hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    Laboratory Consumables
                  </Link>
                  <Link
                    href="/products/laboratory-instruments"
                    className="rounded-md px-3 py-2 text-sm transition-all hover:bg-red-50 hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    Laboratory Instruments
                  </Link>
                  <Link
                    href="/products"
                    className="rounded-md px-3 py-2 text-sm transition-all hover:bg-red-50 hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Products
                  </Link>
                </div>
              </div>

              <Link
                href="/services"
                className="rounded-lg px-4 py-3 text-base font-medium transition-all hover:bg-red-50 hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>

              <Link
                href="/about"
                className="rounded-lg px-4 py-3 text-base font-medium transition-all hover:bg-red-50 hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="rounded-lg px-4 py-3 text-base font-medium transition-all hover:bg-red-50 hover:text-red-600 focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
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
