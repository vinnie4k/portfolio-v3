"use client";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface props {
  link: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  category: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
}

export default function BlogTopCell({
  link,
  imageSrc,
  imageAlt,
  category,
  title,
  description,
  date,
  readTime,
}: props) {
  return (
    <a
      href={link}
      className="flex flex-col gap-4 lg:gap-12 animate-opacity md:flex-row"
    >
      {/* Image */}
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 0.5 }}
        src={imageSrc.src}
        alt={imageAlt}
        className="h-[320px] md:h-[200px] lg:h-[320px] lg:w-[480px] rounded-[12px] md:rounded-[16px] object-cover"
      />

      {/* Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 0.75 }}
        className="flex flex-col gap-2 lg:gap-4 md:justify-center"
      >
        <p className="b2 font-medium text-primary-700 dark:text-secondary-300">
          {category}
        </p>
        <h3 className="text-neutral-800 dark:text-neutral-200">{title}</h3>
        <p className="b1 text-neutral-700 dark:text-neutral-300 md:line-clamp-4 max-lg:line-clamp-6">
          {description}
        </p>
        <div className="flex flex-row gap-4">
          <p className="b2 font-medium text-neutral-800 dark:text-neutral-200">
            {date}
          </p>
          <p className="b2 text-neutral-600 dark:text-neutral-400">
            {readTime}
          </p>
        </div>
      </motion.div>
    </a>
  );
}
