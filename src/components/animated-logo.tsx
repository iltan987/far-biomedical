"use client";

import { motion } from "motion/react";
import Image from "next/image";

import logo from "@/images/logo.png";

export function AnimatedLogo() {
  return (
    <div className="flex items-center justify-center overflow-hidden">
      <motion.div
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
          src={logo}
          alt="FAR Biomedical Logo - Ouroboros"
          className="rounded-full drop-shadow-[0_0_25px_rgba(220,38,38,0.4)]"
        />
      </motion.div>
    </div>
  );
}
