"use client";

import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  topic: string;
  date: string;
}

export default function BlogHero({ title, description, topic, date }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
      className="flex flex-col gap-6 px-4 md:px-8 md:flex-row md:gap-[96px] lg:gap-[256px] lg:px-0 lg:w-[1128px]"
    >
      <div className="flex flex-col gap-6 md:gap-4">
        <h1 className="text-neutral-900 dark:text-neutral-100">{title}</h1>
        <p className="s2 text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
      <div className="flex flex-row gap-3 md:flex-col md:gap-1 md:w-[256px] md:items-end">
        <p className="b2 font-medium text-neutral-900 dark:text-neutral-100">
          {topic}
        </p>
        <p className="b2 text-neutral-600 dark:text-neutral-400">{date}</p>
      </div>
    </motion.div>
  );
}
