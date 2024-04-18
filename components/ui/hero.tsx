"use client";

import { motion } from "framer-motion";
import { Highlight } from "./hero-highlight";

export const Hero = () => {
  return (
    <div>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mx-auto max-w-4xl px-4 text-center text-3xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-5xl lg:text-7xl lg:leading-snug"
      >
        All-in-One AI Assistant
      </motion.h1>
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="mx-auto max-w-4xl px-4 text-center text-2xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-3xl lg:text-5xl lg:leading-snug"
      >
        <Highlight className="text-black dark:text-white">
          Personal, Smart.
        </Highlight>
        <br />
      </motion.h1>
    </div>
  );
};
