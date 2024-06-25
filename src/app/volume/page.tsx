"use client";

import WorkDescription from "@/components/WorkDescription";
import TextBlock from "@/components/TextBlock";
import volumeMain from "../../../public/volume/volume-main.png";
import volume1 from "../../../public/volume/volume-1.png";
import volume2 from "../../../public/volume/volume-2.png";
import volume3 from "../../../public/volume/volume-3.png";
import volume4 from "../../../public/volume/volume-4.png";
import volume5 from "../../../public/volume/volume-5.png";
import volume6 from "../../../public/volume/volume-6.png";
import ImageBlock from "@/components/ImageBlock";
import LinksCell from "@/components/LinksCell";
import NextCell from "@/components/NextCell";
import { motion } from "framer-motion";
import WorkFeatureCell from "@/components/WorkFeatureCell";
import FlyerIcon from "@/icons/FlyerIcon";
import LockIcon from "@/icons/LockIcon";

export default function Volume() {
  return (
    <>
      {/* Hero */}
      <div className="h-[720px] md:h-[780px] lg:h-[880px]">
        <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-volume">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1 }}
            className="flex flex-col gap-12 lg:gap-16 items-center"
          >
            <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
              <h1 className="text-neutral-900 dark:text-neutral-100">Volume</h1>
              <p className="s2 text-neutral-600 dark:text-neutral-400">
                Turn Up the Student Buzz.
              </p>
            </div>
            {/* Description */}
            <WorkDescription
              roles={["Developer"]}
              timeline={["2023"]}
              frontend={["SwiftUI", "Combine"]}
              backend={["Node.js + GraphQL", "MongoDB"]}
            />
          </motion.div>
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 1.25 }}
            src={volumeMain.src}
            alt="Image of the Volume project"
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
          heading="A New Era"
          body={[
            "Volume, a platform designed to amplify student voices at Cornell University, aimed to solve a significant problem within the campus community: the lack of a centralized hub for student-created content. Students yearned for a convenient way to access diverse publications and stay connected with campus life, while publications struggled to reach a wider audience due to limited resources and dispersed content.",
            "Volume's initial solution was to aggregate student publications, making them easily accessible through a user-friendly app. However, we recognized an opportunity to go beyond this initial concept. By incorporating student flyers and announcements alongside publications, we could transform Volume into a comprehensive student news platform, catering to the diverse interests and needs of the Cornell community. This strategic shift aligned with our core mission: to better connect students with each other and with campus organizations by making their content easily accessible.",
          ]}
        />
        <ImageBlock
          imageSrc={volume1}
          imageAlt="An image of a board containing many flyers in a student hall at Cornell University."
          imageStyle="md:max-w-[800px]"
          caption="☝🏻 An image of a board containing many flyers in a student hall at Cornell University."
        />
        <TextBlock
          heading="Architecting the Transformation"
          body={[
            "As the sole iOS developer on the Volume team, I played a pivotal role in bringing this new vision to life. The expanded scope of the platform necessitated a complete redesign of the app. This meant refactoring over 90% of the existing codebase, written in SwiftUI, to accommodate the new features and functionalities.",
            "My responsibilities extended beyond UI changes. I was tasked with implementing two critical components:",
          ]}
        />

        {/* Features */}
        <div className="flex flex-col gap-6 lg:gap-8 lg:grid lg:grid-cols-2">
          <WorkFeatureCell
            icon={
              <FlyerIcon className="stroke-neutral-900 dark:stroke-neutral-100 w-7 md:w-8 lg:w-9" />
            }
            title="Community Board"
            description="This feature would serve as a central hub for student-created flyers, enabling organizations to share announcements, events, and opportunities directly with the student body."
          />
          <WorkFeatureCell
            icon={
              <LockIcon className="stroke-neutral-900 dark:stroke-neutral-100 w-7 md:w-8 lg:w-9" />
            }
            title="Organization Auth"
            description="To ensure the integrity of the community board, I developed a secure authentication system that would allow organizations to verify their identities and manage their flyer content within the app."
          />
        </div>

        <ImageBlock
          imageSrc={volume2}
          imageAlt="The flyers page (left) displaying weekly and upcoming events, and the organization admin page (right) to manage flyers."
          imageStyle="md:max-w-[584px]"
          caption="☝🏻 The flyers page (left) displaying weekly and upcoming events, and the organization admin page (right) to manage flyers."
        />
        <TextBlock
          heading="The Development Journey"
          body={[
            "Joining Cornell AppDev and taking on the Volume project marked several firsts for me. It was my initial foray into SwiftUI, a declarative framework that differed significantly from the imperative UIKit I was accustomed to. This presented a steep learning curve as I had to grasp new concepts and design patterns.",
            "Early in the process, I realized that the existing codebase, while attempting to follow the MVVM architecture, had numerous inconsistencies and violations. To establish a solid foundation for the new features, I restructured the codebase, making it more organized, maintainable, and scalable. This involved refactoring views, view models, and models, ensuring adherence to best practices and architectural principles.",
            "I implemented several key features that are now core to the app, including the widgets, bookmarks, the organization admin page. I also played a crucial role in transitioning the app to a new backend schema, ensuring seamless integration and a smooth user experience. In addition to these major features, I consistently focused on enhancing the user experience by fixing bugs and implementing UI improvements. I contributed to various areas of the app, from onboarding and settings to the new flyers feature, ensuring that users could easily navigate and interact with the app.",
            "Beyond the frontend, I actively contributed to the backend infrastructure. I updated API declarations, integrated the backend with the frontend, and resolved issues with the flyer upload process. I also contributed to refactoring efforts on the backend, deprecating unused code and improving the filtering mechanisms.",
          ]}
        />
        <ImageBlock
          imageSrc={volume3}
          imageAlt="View flyers uploaded by an organization (left), read featured magazines (center), and add widgets to your home screen (right)."
          imageStyle="md:max-w-[888px]"
          caption="☝🏻 View flyers uploaded by an organization (left), read featured magazines (center), and add widgets to your home screen (right)."
        />
        <TextBlock
          heading="Overcoming Challenges"
          body={[
            "Of the numerous challenges I encountered, the most demanding was undoubtedly the design and implementation of the organization authentication system. Collaborating closely with Zach Seidner, another developer on the Volume team, we explored various approaches before settling on a username and access code system. Each organization would have a unique set of credentials, with the access codes being hashed and stored securely in the database to protect against unauthorized access.",
            "Another hurdle was my unfamiliarity with GraphQL and Apollo. This required a substantial investment of time and effort to understand how queries and mutations worked, as well as the fundamental differences between GraphQL and REST APIs. Through extensive research, experimentation, and guidance from more experienced team members, I was able to master these technologies and integrate them effectively into the backend and frontend systems.",
          ]}
        />
        <TextBlock
          heading="Success & Recognition"
          body={[
            "The culmination of our efforts was the successful release of the new community board feature, along with the magazines section and the complete redesign of the Volume app. The app was well-received by the Cornell community, with students appreciating the centralized access to both publications and campus announcements.",
            "To promote the updated platform, we launched a series of marketing initiatives, including distributing flyers across campus and hosting tabling events. These efforts yielded impressive results, leading to a 300% increase in our user base and significant improvements in user retention. Furthermore, Volume's impact and innovation were recognized when it was awarded the EY Corporate Award at Cornell's annual technology showcase, Bits On Our Minds (BOOM).",
          ]}
        />
        <ImageBlock
          imageSrc={volume4}
          imageAlt="A huge spike in our user base numbers since February 2023."
          imageStyle="md:max-w-[800px]"
          caption="☝🏻 A huge spike in our user base numbers since February 2023."
        />
        <ImageBlock
          imageSrc={volume5}
          imageAlt="Shaking hands with my Product Manager, Liam Du, after receiving the BOOM award."
          imageStyle="md:max-w-[800px]"
          caption="☝🏻 Shaking hands with my Product Manager, Liam Du, after receiving the BOOM award."
        />
        <TextBlock
          heading="A Foundation for Future Success"
          body={[
            "My first semester on the Cornell AppDev team, working on the Volume project, was an incredibly enriching experience. I gained a comprehensive understanding of the software development lifecycle, from ideation and design to implementation and deployment. I learned how to collaborate effectively with a team of designers, developers, and project managers, as well as how to leverage version control systems like Git and GitHub. The project also deepened my knowledge of SwiftUI, GraphQL, Apollo, and backend development.",
            "Perhaps most importantly, I discovered the joy and fulfillment that comes from working with a passionate team to create something that has a tangible impact on the community. The lessons I learned during this project will undoubtedly serve as a solid foundation for my future endeavors in software development. I am eager to continue applying my skills and knowledge to create innovative and impactful products that improve the lives of others.",
          ]}
        />
        <ImageBlock
          imageSrc={volume6}
          imageAlt="The Volume Team <3"
          imageStyle="md:max-w-[800px]"
          caption="☝🏻 The Volume Team <3"
        />
        <LinksCell
          github="https://github.com/cuappdev/volume-ios"
          appstore="https://apps.apple.com/us/app/volume-cornell-news/id1547133564"
          playstore="https://play.google.com/store/apps/details?id=com.cornellappdev.android.volume&pcampaignid=web_share"
        />
      </motion.div>

      {/* Next */}
      <NextCell
        prevText="Grabbit"
        prevLink="/grabbit"
        nextText="Scribbly"
        nextLink="/scribbly"
      />
    </>
  );
}
