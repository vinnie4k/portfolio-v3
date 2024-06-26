"use client";

import WorkDescription from "@/components/WorkDescription";
import TextBlock from "@/components/TextBlock";
import grabbitMain from "../../../public/grabbit/grabbit-main.png";
import grabbit1 from "../../../public/grabbit/grabbit-1.mp4";
import grabbit2 from "../../../public/grabbit/grabbit-2.mp4";
import grabbit3 from "../../../public/grabbit/grabbit-3.png";
import ImageBlock from "@/components/ImageBlock";
import LinksCell from "@/components/LinksCell";
import NextCell from "@/components/NextCell";
import { motion } from "framer-motion";
import WorkFeatureCell from "@/components/WorkFeatureCell";
import BellIcon from "@/icons/BellIcon";
import SearchIcon from "@/icons/SearchIcon";
import EyeIcon from "@/icons/EyeIcon";
import SpeedIcon from "@/icons/SpeedIcon";

export default function Grabbit() {
  return (
    <>
      {/* Hero */}
      <div className="h-[720px] md:h-[800px] lg:h-[900px]">
        <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-grabbit">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeOut",
              duration: 0.25,
              delay: 1,
            }}
            className="flex flex-col gap-12 lg:gap-16 items-center"
          >
            <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
              <h1 className="text-neutral-900 dark:text-neutral-100">
                Grabbit
              </h1>
              <p className="s2 text-neutral-600 dark:text-neutral-400">
                Don't Stress, Just Grabbit!
              </p>
            </div>
            {/* Description */}
            <WorkDescription
              roles={["Designer", "Developer"]}
              timeline={["Summer 2023"]}
              frontend={["SwiftUI"]}
              backend={["Node.js + Express", "Firebase"]}
            />
          </motion.div>
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
            src={grabbitMain.src}
            alt="Image of the Grabbit project"
            className="max-h-[360px] md:max-h-[560px] object-contain"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.25, delay: 1.5 }}
        className="flex flex-col gap-12 lg:gap-20 items-center"
      >
        <TextBlock
          heading="A Student’s Nightmare"
          body={[
            "It's 7:30 a.m. on the first day of course enrollment at Cornell University. A student eagerly tries to register for their chosen classes, only to be met with a frustrating \"spinner of death\" followed by disheartening red X's. They've been shut out of their desired courses. Now what? Their only option is to constantly monitor Student Center, hoping to catch a seat opening—an unpredictable and disruptive process.",
            "At Cornell, the competition for course enrollment is fierce. Students often find themselves in a race against time, unsure when or if a coveted spot will become available. They may miss out due to busy schedules or the sheer volume of students vying for limited seats. This uncertainty and stress detract from the overall student experience.",
            "Grabbit is a mobile app designed to alleviate these pain points. By providing real-time notifications when a seat opens in a student's desired course, Grabbit empowers students to proactively manage their schedules and secure their desired courses.",
          ]}
        />
        <TextBlock
          heading="Your Secret Weapon"
          body={[
            "Grabbit is a mobile app designed to alleviate these pain points. By providing real-time notifications when a seat opens in a student's desired course, Grabbit empowers students to proactively manage their schedules and secure their desired courses.",
          ]}
        />

        {/* Features */}
        <div className="flex flex-col gap-6 lg:gap-8 lg:grid lg:grid-cols-2">
          <WorkFeatureCell
            icon={
              <BellIcon className="fill-neutral-900 dark:fill-neutral-100 w-7 md:w-8 lg:w-9" />
            }
            title="Instant Notifications"
            description="The cornerstone of Grabbit. Students receive real-time push notifications the moment a seat opens up in a desired course, eliminating the need for constant manual checking and ensuring they never miss an opportunity."
          />
          <WorkFeatureCell
            icon={
              <SearchIcon className="fill-neutral-900 dark:fill-neutral-100 w-7 md:w-8 lg:w-9" />
            }
            title="Effortless Search"
            description="A streamlined search function allows students to quickly locate and start tracking their preferred courses. No more navigating complex menus or sifting through endless lists."
          />
          <WorkFeatureCell
            icon={
              <EyeIcon className="fill-neutral-900 dark:fill-neutral-100 w-7 md:w-8 lg:w-9" />
            }
            title="One-Tap Tracking"
            description="Students can easily add or remove courses from their tracking list with a single tap, accompanied by haptic feedback and visual confirmation for a seamless user experience."
          />
          <WorkFeatureCell
            icon={
              <SpeedIcon className="fill-neutral-900 dark:fill-neutral-100 w-7 md:w-8 lg:w-9" />
            }
            title="Turbocharged Enrollment"
            description={
              'Upon receiving a notification, students are redirected to Grabbit\'s home screen. Here, a clear "Enroll" button and a code-copying feature is displayed for each available course. This optimized workflow enables lightning-fast enrollment directly through the Student Center website.'
            }
          />
        </div>

        {/* Videos */}
        <div className="flex flex-col gap-3 items-center">
          <div className="flex flex-row gap-6 justify-center">
            <video
              preload="auto"
              className="w-[calc(50%-28px)] rounded-[24px] md:w-[280px] md:rounded-[32px]"
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
            >
              <source src={grabbit1} type="video/mp4" />
            </video>
            <video
              preload="auto"
              className="w-[calc(50%-28px)] rounded-[24px] md:w-[280px] md:rounded-[32px]"
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
            >
              <source src={grabbit2} type="video/mp4" />
            </video>
          </div>
          <p className="b2 text-neutral-600 dark:text-neutral-400 text-center">
            ☝🏻 Tracking/untracking flow and enrollment process.
          </p>
        </div>

        <TextBlock
          heading="Building the Engine"
          body={[
            "Grabbit leverages Cornell's existing IT infrastructure to streamline development and ensure real-time accuracy. By integrating directly with the Class Roster API, Grabbit gains access to comprehensive course information and enrollment status updates.",
            'A Firebase Cloud Function, scheduled to run every minute, acts as the engine behind Grabbit\'s instant notifications. This function continuously polls the Class Roster API, comparing the current status of each tracked course against its previous state. If a course transitions from "Closed" to "Open," Grabbit swiftly identifies all users tracking that course and sends them immediate push notifications, ensuring they never miss a chance to enroll.',
            "To optimize search functionality and minimize data redundancy, Grabbit's interface directly queries the Class Roster API whenever a user searches for courses. This approach eliminates the need for Grabbit to maintain a separate course database, saving valuable resources and reducing potential inconsistencies.",
            "For personalization and enhanced security, Grabbit requires users to authenticate via Google or Apple sign-in. To maintain optimal performance and data integrity, the backend database is cleared before and after each enrollment period, ensuring that users receive only relevant notifications and that the system remains efficient.",
          ]}
        />
        <ImageBlock
          imageSrc={grabbit3}
          imageAlt="Push notifications and the landing screen of Grabbit."
          imageStyle="md:max-w-[584px]"
          caption="☝🏻 Push notifications and the landing screen of Grabbit."
        />
        <TextBlock
          body={[
            "Built on a foundation of Node.js and Express, Grabbit's backend REST API handles core functionalities such as user creation/deletion and course tracking/untracking. Notably, Grabbit marked my first foray into building a full-fledged application using SwiftUI, after having previously worked with UIKit. This project allowed me to expand my skill set and gain valuable experience in crafting a user-friendly and efficient mobile application.",
          ]}
        />
        <TextBlock
          heading="Expanding the Horizon"
          body={[
            "While Grabbit has successfully addressed a major pain point for Cornell students with iOS devices, its potential extends far beyond its current reach. Expanding to Android is a clear next step, with the choice between building a separate Kotlin codebase or embracing a cross-platform framework like Flutter or React Native offering distinct advantages in terms of development efficiency and resource utilization.",
            "Beyond platform expansion, exploring a web-based version of Grabbit could further enhance accessibility, catering to students who prefer web interfaces or primarily use laptops and desktops. Additionally, investigating potential integrations with Cornell's official course registration system could streamline the enrollment process even further, reducing friction and enhancing the overall user experience.",
            "By continuously iterating on Grabbit's features and functionality, I aim to solidify its position as the go-to tool for course enrollment at Cornell, empowering students to take control of their academic journeys and achieve their goals with confidence.",
          ]}
        />
        <LinksCell
          github="https://github.com/vinnie4k/Grabbit"
          appstore="https://apps.apple.com/us/app/grabbit/id6450518666"
        />
      </motion.div>

      {/* Next */}
      <NextCell
        prevText="Status Platform"
        prevLink="/status"
        nextText="Volume"
        nextLink="/volume"
      />
    </>
  );
}
