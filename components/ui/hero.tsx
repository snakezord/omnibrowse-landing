"use client";

import { motion } from "framer-motion";
import { Highlight as Highlight2 } from "./hero-highlight";

export const Hero = () => {
  return (
    <div className="text-center md:text-start">
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
        className="max-w-4xl text-center text-5xl font-bold leading-relaxed text-neutral-700 dark:text-white md:text-start md:text-5xl lg:text-8xl lg:leading-none"
      >
        Navigate the Web with <Highlight2>AI</Highlight2>{" "}
        <br className="hidden xl:inline-block" />
        by your side.
      </motion.h1>
    </div>
  );
};
