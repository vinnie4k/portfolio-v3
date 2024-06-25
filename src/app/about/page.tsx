"use client";

import headshotImg from "../../../public/about/headshot.png";
import ExperienceCell from "@/components/ExperienceCell";
import { Experience } from "@/constants";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-12 md:flex-row lg:gap-24">
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
            src={headshotImg.src}
            alt="Headshot of Vin Bui"
            className="h-[320px] md:w-[240px] md:h-[256px] lg:w-[360px] lg:h-[400px] rounded-[16px] object-cover"
          />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
            className="flex flex-col gap-3 lg:gap-6"
          >
            <h3 className="text-neutral-800 dark:text-neutral-200">
              I'm a Full-stack Developer from Dallas, Texas.
            </h3>
            <p className="b1 text-neutral-600 dark:text-neutral-400">
              I'm a senior at Cornell University, studying Information Science,
              Systems, and Technology with a focus on interactive technologies
              and UX design. I'm passionate about leveraging technology to
              create intuitive and impactful solutions. At Cornell, I've
              collaborated on a variety of projects that have reinforced my
              belief in the power of software to address real-world challenges.
            </p>
            <p className="b1 text-neutral-600 dark:text-neutral-400">
              When I'm not coding, you can find me outside enjoying nature –
              hiking, camping, fishing, or stargazing! I'm also a big fan of
              basketball, tennis, and fitness.
            </p>
          </motion.div>
        </div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 0.25, delay: 1.5 }}
          className="flex flex-col gap-4 md:gap-0 md:relative md:h-[272px] lg:h-[336px]"
        >
          <ExperienceCell experience={Experience.Glassdoor} />
          <ExperienceCell experience={Experience.Terra} />
          <ExperienceCell experience={Experience.Llounge} />
          <ExperienceCell experience={Experience.AppDev} />
        </motion.div>
      </div>
    </>
  );
}
