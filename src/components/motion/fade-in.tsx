"use client";

import { motion } from "motion/react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  renderStrategy?: "reveal" | "paint-safe";
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  renderStrategy = "reveal",
  className,
}: FadeInProps) {
  const revealDirections = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {},
  };
  const paintSafeDirections = {
    up: { y: 8 },
    down: { y: -8 },
    left: { x: 8 },
    right: { x: -8 },
    none: { scale: 0.985 },
  };
  const initial =
    renderStrategy === "paint-safe"
      ? { opacity: 1, ...paintSafeDirections[direction] }
      : { opacity: 0, ...revealDirections[direction] };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
