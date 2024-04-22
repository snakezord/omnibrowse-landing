"use client";

import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import { Highlight } from "./highlight";
import {
  IconFileTypePdf,
  IconFileTypeCsv,
  IconJson,
  IconHtml,
} from "@tabler/icons-react";

import { LogoChatGpt4, LogoClaude2, LogoGemini } from "./logo-model";

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className="max-w-4xl md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <motion.div
          className={cn("[&>p:text-lg]", item.className)}
          key={i}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: (i + 1) * 0.12,
            duration: 1,
          }}
        >
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
          />
        </motion.div>
      ))}
    </BentoGrid>
  );
}

const ApiKeyComponent = () => {
  return (
    <div className="flex flex-col items-start gap-1">
      <p>Enter your API key</p>
      <input
        className="max-w-44 rounded-md pl-3"
        type="text"
        value="sk-xxxxxxxxxxxxxxxx"
        disabled
      />
    </div>
  );
};

const ApiKeyComponentSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-4 w-32 animate-pulse rounded-md bg-gray-800"></div>
      <div className="h-5 w-44 animate-pulse rounded-md bg-gray-600"></div>
    </div>
  );
};

const SkeletonTwo = () => {
  const elements = [
    { id: "gpt4", icon: <LogoChatGpt4 />, component: <ApiKeyComponent /> },
    {
      id: "claude",
      icon: <LogoClaude2 />,
      component: <ApiKeyComponentSkeleton />,
    },
    {
      id: "gemini",
      icon: <LogoGemini />,
      component: <ApiKeyComponentSkeleton />,
    },
  ];

  const CARD_OFFSET = 45; // Adjusts the vertical position of each card
  const SCALE_FACTOR = 0.1; // Decreases the scale for each card behind

  const containerVariants = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 1.03,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="relative flex h-full min-h-[10rem] w-full items-end justify-center"
      variants={containerVariants}
      initial="initial"
      whileHover="animate"
    >
      {elements.map((element, index) => (
        <motion.div
          key={element.id}
          className={`absolute flex w-full flex-row items-center space-x-2 rounded-full border border-neutral-100 bg-white p-2 shadow-lg dark:border-white/[0.2] dark:bg-black`}
          style={{
            y: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: elements.length - index,
          }}
        >
          {element.icon}
          {element.component}
        </motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonThree = () => {
  const scale = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 1.1,
      x: 10,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: -5,
      rotate: -2,
      transition: {
        duration: 0.3,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: 5,
      rotate: 2,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2"
    >
      <Message
        text="Make this cat less grumpy"
        author="human"
        variants={variants}
      />
      <motion.div variants={scale}>
        <Image
          className="h-12 w-12 rounded-lg"
          src="/grumpy-cat.webp"
          width={100}
          height={100}
          alt="grumpy-cat"
        />
      </motion.div>
      <Message
        text="Sure, here is less grumpy cat"
        author="ai"
        variants={variantsSecond}
      />
      <motion.div variants={scale}>
        <Image
          className="h-12 w-12 rounded-lg"
          src="/less-grumpy-cat.webp"
          width={100}
          height={100}
          alt="grumpy-cat"
        />
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const first = {
    initial: {
      x: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-row space-x-2"
    >
      <motion.div
        variants={first}
        className="z-20 flex h-full flex-col items-start justify-start gap-2 rounded-2xl bg-transparent"
      >
        <Message
          text="Summarize and relate following documents"
          author="human"
        />
        <Attachments />
        <Message
          text="Those documents share similarities in the following..."
          author="ai"
        />
      </motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const scale = {
    initial: {
      scale: 1,
    },
    animate: {
      scale: 1.1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 5,
      rotate: 2,
      transition: {
        duration: 0.3,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -5,
      rotate: -2,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full flex-1 flex-col space-y-2"
    >
      <Message text="Summarize my X feed" author="human" variants={variants} />
      <motion.div
        className="flex w-fit items-center gap-1.5 rounded-2xl bg-stone-900 p-1"
        variants={scale}
      >
        <Image
          className="h-8 w-8 rounded-lg"
          src="/x.jpg"
          width={100}
          height={100}
          alt="twitter"
        />
        <div className="flex flex-col items-start px-1">
          <p className="text-sm text-neutral-300">Home / X</p>
          <p className="text-xs text-neutral-500">x.com/home</p>
        </div>
      </motion.div>
      <Message
        text="Your feed consists of tweets from Historic Vids, Dan, Elon Musk..."
        author="ai"
        variants={variantsSecond}
      />
    </motion.div>
  );
};

const items = [
  {
    title: "Chat with any webpage 🌐 ",
    description: (
      <span className="text-sm">
        Assists in reading & writing on any webpage.
        <br /> Save them on personal <Highlight>knowledge base.</Highlight>
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: null,
  },
  {
    title: "Chat between multiple files 🖇",
    description: (
      <p className="text-sm">
        In build <Highlight>RAG</Highlight> for similarity search.
        <br />
        Providing results with quality references.
      </p>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-1",
    icon: null,
  },

  {
    title: "Vision 👀",
    description: (
      <span className="text-sm">
        Chat with any image. <br /> Generate new images with{" "}
        <Highlight>DALL-E</Highlight>.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: null,
  },
  {
    title: "No monthly fee, no limit ∞",
    description: (
      <span className="text-sm">
        Bring your <Highlight>own</Highlight> API key. Have full control.
        <br />
        Pay for what you use.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: null,
  },
];

const Message = ({
  text,
  author,
  variants,
}: {
  variants?: Record<string, any>;
  text: string;
  author: "human" | "ai";
}) => {
  return (
    <motion.div
      variants={variants}
      className="flex w-fit flex-row items-center space-x-2 rounded-2xl border border-neutral-100  bg-white p-2 dark:border-white/[0.15] dark:bg-black"
    >
      {author === "human" ? (
        <Image
          src="https://pbs.twimg.com/profile_images/1763380041356873728/li_Nl2LT_400x400.jpg"
          alt="avatar"
          height={100}
          width={100}
          className="h-6 w-6 rounded-full"
        />
      ) : (
        <LogoChatGpt4 />
      )}
      <p className="text-left text-xs text-neutral-300">{text}</p>
    </motion.div>
  );
};

const Attachments = () => {
  return (
    <div className="flex items-center gap-0.5 rounded-2xl bg-stone-900 p-2">
      <div className="flex items-center gap-1.5">
        <IconFileTypePdf className="text-neutral-300" />
        <IconFileTypeCsv className="text-neutral-300" />
        <IconJson className="text-neutral-300" />
        <IconHtml className="text-neutral-300" />
      </div>
      <p className="text-neutral-400">...</p>
    </div>
  );
};
