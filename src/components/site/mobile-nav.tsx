"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleExpanded = (name: string) => {
    setExpandedItem(expandedItem === name ? null : name);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-75 sm:w-87.5 [&>button:last-child]:hidden"
        aria-describedby={undefined}
      >
        <SheetHeader className="flex-row items-center justify-between gap-4 border-b pb-4">
          <SheetTitle asChild>
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2"
            >
              <Image
                src="/logo.svg"
                alt="FAR Better Bio"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold">FAR Better</span>
            </Link>
          </SheetTitle>
          <SheetClose asChild>
            <Button variant="ghost" size="icon" className="shrink-0">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </SheetClose>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-1">
          {navigationItems.map((item) =>
            item.children ? (
              <div key={item.name}>
                <button
                  onClick={() => toggleExpanded(item.name)}
                  className="hover:bg-accent hover:text-accent-foreground flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium transition-colors"
                >
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      expandedItem === item.name && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "mt-1 ml-4 flex flex-col gap-1 overflow-hidden transition-all duration-200",
                    expandedItem === item.name
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  )}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={(e) => {
                        if (pathname === child.href) e.preventDefault();
                        setOpen(false);
                      }}
                      className="text-muted-foreground hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-sm transition-colors"
                    >
                      {child.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (pathname === item.href) e.preventDefault();
                  setOpen(false);
                }}
                className="hover:bg-accent hover:text-accent-foreground rounded-md px-3 py-2 text-base font-medium transition-colors"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
