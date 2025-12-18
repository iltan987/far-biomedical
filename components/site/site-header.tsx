import Image from "next/image";
import Link from "next/link";

import { HeaderWrapper } from "@/components/site/header-wrapper";
import { MobileNav } from "@/components/site/mobile-nav";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu/navigationMenuTriggerStyle";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";

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
        <NavigationMenu viewport={false} className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) =>
              item.children ? (
                <NavigationMenuItem key={item.name}>
                  <NavigationMenuTrigger className="bg-transparent">
                    {item.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-50 gap-1 p-2">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={child.href}
                              className="hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block rounded-md px-3 py-2 text-sm leading-none no-underline transition-colors outline-none select-none"
                            >
                              {child.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "bg-transparent"
                      )}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </HeaderWrapper>
  );
}
