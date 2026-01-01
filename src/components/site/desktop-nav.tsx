"use client";

import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navigationItems } from "@/data/navigation";

export function DesktopNav() {
  const pathname = usePathname();
  return (
    <NavigationMenu viewport={false} className="hidden lg:flex">
      <NavigationMenuList>
        {navigationItems.map((item) =>
          item.children ? (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-50 gap-1 p-2">
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <NavigationMenuLink
                        href={child.href}
                        onClick={(e) => {
                          if (pathname === child.href) e.preventDefault();
                        }}
                      >
                        {child.name}
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            <NavigationMenuItem key={item.name}>
              <NavigationMenuLink
                href={item.href}
                className={navigationMenuTriggerStyle()}
                onClick={(e) => {
                  if (pathname === item.href) e.preventDefault();
                }}
              >
                {item.name}
              </NavigationMenuLink>
            </NavigationMenuItem>
          )
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
