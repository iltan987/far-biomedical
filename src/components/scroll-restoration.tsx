"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure browser handles scroll restoration
    if (history.scrollRestoration) {
      history.scrollRestoration = "auto";
    }
  }, []);

  // Handle anchor link smooth scrolling programmatically
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const id = anchor.getAttribute("href")?.slice(1);
        const element = id ? document.getElementById(id) : null;
        element?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}
