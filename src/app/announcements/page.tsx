"use client";

import WorkDescription from "@/components/WorkDescription";
import announcementsMain from "../../../public/announcements/announcements-main.png";
import NextCell from "@/components/NextCell";
import { motion } from "framer-motion";
import TextBlock from "@/components/TextBlock";

export default function Announcements() {
  return (
    <>
      {/* Hero */}
      <div className="h-[600px] md:h-[659px] lg:h-[739px]">
        <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-announcements">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 0.5 }}
            className="flex flex-col gap-12 lg:gap-16 items-center"
          >
            <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
              <h1 className="text-neutral-900 dark:text-neutral-100">
                Announcements
              </h1>
              <p className="s2 text-neutral-600 dark:text-neutral-400">
                In-app alerts anytime, anywhere.
              </p>
            </div>
            {/* Description */}
            <WorkDescription
              roles={["Product Manager", "Lead Developer"]}
              timeline={["2024"]}
              frontend={["Next.js + React", "Tailwind"]}
              backend={["Node.js + Express", "MongoDB"]}
            />
          </motion.div>
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 0.75 }}
            src={announcementsMain.src}
            alt="Image of the Announcements project"
            className="max-h-[200px] md:max-h-[419px] object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
        className="flex flex-col gap-12 lg:gap-20 items-center"
      >
        <TextBlock
          heading="Coming Soon"
          body={[
            "This project is currently in development and will be available to view soon. Check back for updates!",
          ]}
        />
      </motion.div>

      {/* Next */}
      <NextCell
        prevText="Scribbly"
        prevLink="/scribbly"
        nextText="Uplift"
        nextLink="/uplift"
      />
    </>
  );
}
