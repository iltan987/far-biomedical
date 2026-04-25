"use client";

import { motion } from "motion/react";
import Image, { type StaticImageData } from "next/image";

import logo from "@/images/logo.png";
import { cn } from "@/lib/utils";

type AnimatedLogoProps = {
  src?: string | StaticImageData;
  alt?: string;
  containerClassName?: string;
  imageClassName?: string;
  sizes?: string;
};

export function AnimatedLogo({
  src = logo,
  alt = "FAR Biomedical Logo - Ouroboros",
  containerClassName,
  imageClassName,
  sizes = "(max-width: 768px) 80vw, 33vw",
}: AnimatedLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center overflow-hidden p-8",
        containerClassName
      )}
    >
      <motion.div
        className="relative aspect-square w-full max-w-sm"
        animate={{
          rotate: 360,
          scale: [1, 1.03, 1],
        }}
        transition={{
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={cn(
            "object-contain rounded-full drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]",
            imageClassName
          )}
        />
      </motion.div>
    </div>
  );
}
