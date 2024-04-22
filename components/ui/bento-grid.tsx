"use client";

import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:gap-4 md:auto-rows-[18rem] md:grid-cols-2 ",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.8 });

  return (
    <div
      ref={ref}
      className={cn(
        "group/bento row-span-1 flex h-full flex-col-reverse justify-between gap-4 rounded-xl border border-transparent bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none md:flex-col md:gap-0 md:space-y-4",
        isInView
          ? `opacity-100 transition-all delay-100 duration-500`
          : `opacity-25`,
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mb-2 mt-2 text-start font-sans text-2xl font-bold text-neutral-600 dark:text-neutral-200 md:text-xl">
          {title}
        </div>
        <div className="text-start font-sans text-sm font-normal text-neutral-600 dark:text-neutral-400">
          {description}
        </div>
      </div>
    </div>
  );
};
