"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface HeaderWrapperProps {
  children: React.ReactNode;
}

export function HeaderWrapper({ children }: HeaderWrapperProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur transition-shadow duration-200",
        scrolled && "shadow-md"
      )}
    >
      {children}
    </header>
  );
}
