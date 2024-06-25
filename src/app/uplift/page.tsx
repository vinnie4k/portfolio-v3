"use client";

import WorkDescription from "@/components/WorkDescription";
import TextBlock from "@/components/TextBlock";
import upliftMain from "../../../public/uplift/uplift-main.png";
import uplift1 from "../../../public/uplift/uplift-1.png";
import uplift2 from "../../../public/uplift/uplift-2.png";
import ImageBlock from "@/components/ImageBlock";
import LinksCell from "@/components/LinksCell";
import NextCell from "@/components/NextCell";
import { motion } from "framer-motion";

export default function Uplift() {
  return (
    <>
      {/* Hero */}
      <div className="h-[800px] md:h-[1040px] lg:h-[1120px]">
        <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-uplift">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
            className="flex flex-col gap-12 lg:gap-16 items-center"
          >
            <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
              <h1 className="text-neutral-900 dark:text-neutral-100">Uplift</h1>
              <p className="s2 text-neutral-600 dark:text-neutral-400">
                Your Fit Starts Here.
              </p>
            </div>
            {/* Description */}
            <WorkDescription
              roles={["Lead Developer"]}
              timeline={["Winter 2024"]}
              frontend={["SwiftUI", "Combine"]}
              backend={["Python + GraphQL", "PostgreSQL"]}
            />
          </motion.div>
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
            src={upliftMain.src}
            alt="Image of the Uplift project"
            className="max-h-[440px] md:max-h-[800px] object-contain"
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
          heading="The Rescue"
          body={[
            "Uplift is a mobile app designed to streamline the fitness journey for Cornell University students. It provides essential information like gym hours, class schedules, and goal tracking, previously only accessible through a cumbersome website. When I began working on Uplift, the iOS codebase was in disarray, causing the app to stagnate. As the lead iOS developer, I took on the challenge of rebuilding the app from scratch.",
          ]}
        />
        <ImageBlock
          imageSrc={uplift1}
          imageAlt="The broken state of the Uplift iOS app before its complete revival."
          imageStyle="md:max-w-[280px]"
          caption="☝🏻 The broken state of the Uplift iOS app before its complete revival."
        />
        <TextBlock
          heading="A Dual Transformation"
          body={[
            "Recognizing the backend as the root cause of many issues, I spearheaded a complete overhaul. The unreliable web scraping system was replaced with a more controlled Google Sheets solution for managing hours, while capacities continued to be web-scraped from a stable source. This transition, along with the implementation of a development environment and auto-deployment, necessitated a redesign of the database schema to ensure frontend compatibility.",
            "Simultaneously, I rebuilt the iOS app using SwiftUI, establishing a solid foundation with a clear code structure, robust GraphQL networking, and comprehensive documentation. This revitalized version was successfully submitted to the App Store. Throughout the process, I collaborated closely with the backend team, ensuring seamless integration, and mentored new members on tasks like implementing giveaways.",
            "One significant challenge was designing a reliable Google Sheets scraper, considering various scenarios like different hours for each day, multiple fitness centers, and special rules for certain facilities. Handling dates and time zones also proved complex. Additionally, building the app from scratch required careful consideration of frameworks, libraries, and styling conventions to ensure maintainability.",
          ]}
        />
        <TextBlock
          heading="From Zero to Hero"
          body={[
            "After a formal marketing campaign, the revamped Uplift experienced a surge in monthly active users, nearly tripling due to word-of-mouth. The iOS team successfully implemented numerous improvements and features, transforming Uplift into a reliable and valuable tool for students. My work empowered the team to continue making progress, turning an unreliable app into a stable and functional one.",
            "This project provided invaluable experience in handling dates, designing app architecture, and understanding backend systems. It highlighted the importance of collaboration, adaptability, and a willingness to tackle complex technical problems to deliver a valuable product.",
          ]}
        />
        <ImageBlock
          imageSrc={uplift2}
          imageAlt="View fitness center information including gym capacities and facility hours through the Uplift app."
          imageStyle="md:max-w-[888px]"
          caption="☝🏻 View fitness center information including gym capacities and facility hours through the Uplift app."
        />
        <TextBlock
          heading="Beyond the Gym"
          body={[
            "Moving forward, the focus shifts to enhancing Uplift's functionality. The immediate priority is to establish a streamlined process for adding and updating hours, including those for special breaks. I've ensured a smooth transition by training the Spring 2024 Product Manager and backend developers on this process and providing instructional materials.",
            "On the iOS front, the team will concentrate on completing the classes feature and implementing activities. Additionally, the giveaways feature requires adjustments, and merging the release branch with the main branch is crucial. Once backend completes the activities functionality, iOS can seamlessly integrate it. Subsequent steps involve user profile integration and modifications to giveaways, pending backend completion of the user profile functionality. Uplift has a promising roadmap with significant potential for further development and enhancement.",
          ]}
        />
        <LinksCell
          github="https://github.com/cuappdev/uplift-ios-swiftui"
          appstore="https://apps.apple.com/us/app/uplift-cornell-fitness/id1439374374"
          playstore="https://play.google.com/store/apps/details?id=com.cornellappdev.uplift&pcampaignid=web_share"
        />
      </motion.div>

      {/* Next */}
      <NextCell
        prevText="Announcements"
        prevLink="/announcements"
        nextText="Status Platform"
        nextLink="/status"
      />
    </>
  );
}
