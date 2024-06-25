"use client";

import WorkDescription from "@/components/WorkDescription";
import TextBlock from "@/components/TextBlock";
import statusMain from "../../../public/status/status-main.png";
import status1 from "../../../public/status/status-1.png";
import status2 from "../../../public/status/status-2.png";
import status3 from "../../../public/status/status-3.png";
import ImageBlock from "@/components/ImageBlock";
import LinksCell from "@/components/LinksCell";
import NextCell from "@/components/NextCell";
import { motion } from "framer-motion";
import WorkFeatureCell from "@/components/WorkFeatureCell";
import BellIcon from "@/icons/BellIcon";
import BugIcon from "@/icons/BugIcon";
import AppCollectionIcon from "@/icons/AppCollectionIcon";

export default function Status() {
  return (
    <>
      {/* Hero */}
      <div className="h-[600px] md:h-[659px] lg:h-[739px]">
        <div className="flex flex-col gap-12 lg:gap-16 items-center hero-container grad-status">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 0.5 }}
            className="flex flex-col gap-12 lg:gap-16 items-center"
          >
            <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-4">
              <h1 className="text-neutral-900 dark:text-neutral-100">
                Status Platform
              </h1>
              <p className="s2 text-neutral-600 dark:text-neutral-400">
                Transparency in Real Time.
              </p>
            </div>
            {/* Description */}
            <WorkDescription
              roles={["Developer"]}
              timeline={["Fall 2023"]}
              frontend={["Next.js + React", "Tailwind"]}
              backend={["Node.js + Express", "MongoDB"]}
            />
          </motion.div>
          {/* Image */}
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.25, delay: 0.75 }}
            src={statusMain.src}
            alt="Image of the Status Platform project"
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
          heading="Overview"
          body={[
            "Cornell AppDev's suite of products boasts a user base exceeding 15,000 individuals. However, the lack of a dedicated communication channel hindered our ability to keep users informed about service disruptions, bugs, and maintenance. Our reliance on Instagram for updates left a significant portion of our users in the dark. Recognizing the need for a more transparent and accessible solution, my team spearheaded the development of a real-time status platform to provide timely updates on the state of our services.",
            "In this project, I collaborated with two other developers and a designer, taking on the role of full-stack developer. Within a 13-hour hackathon, we set out to create a comprehensive status platform that would bridge the communication gap between AppDev and its users.",
          ]}
        />
        <TextBlock
          heading="13 Hours, 3 Developers, 1 Mission"
          body={[
            "Leveraging our existing technology stack, we built the backend using MongoDB as our database and Express.js with Node.js for the REST API. The database schema consisted of three core collections:",
          ]}
        />

        {/* Features */}
        <div className="flex flex-col gap-6 lg:gap-8 lg:grid lg:grid-cols-3">
          <WorkFeatureCell
            icon={
              <AppCollectionIcon className="fill-neutral-900 dark:fill-neutral-100 w-7 md:w-8 lg:w-9" />
            }
            title="Apps"
            description="This collection stored essential details about each application, including its name, image, and any downtime intervals."
          />
          <WorkFeatureCell
            icon={
              <BugIcon className="stroke-neutral-900 dark:stroke-neutral-100 w-7 md:w-8 lg:w-9" />
            }
            title="Bug Reports"
            description="This collection housed user-submitted bug reports, capturing information like the reporter's email, the report description, and relevant timestamps."
          />
          <WorkFeatureCell
            icon={
              <BellIcon className="fill-neutral-900 dark:fill-neutral-100 w-7 md:w-8 lg:w-9" />
            }
            title="Subscribers"
            description="This collection maintained a list of users who opted to receive email notifications regarding app status updates."
          />
        </div>

        <TextBlock
          body={[
            "This well-structured backend enabled us to implement essential CRUD (Create, Read, Update, Delete) operations for the frontend, as well as an email notification system to keep subscribers informed.",
            "On the frontend, we utilized Next.js with React and Tailwind CSS to craft a responsive web app that worked seamlessly across desktop, tablet, and mobile devices. We meticulously integrated the frontend with the backend API, ensuring a smooth and efficient flow of data. Once the platform was thoroughly tested, we deployed the backend to Digital Ocean servers and the frontend using Vercel. To streamline future updates and maintenance, we also implemented an automated deployment pipeline via GitHub Actions, leveraging Docker for containerization.",
          ]}
        />
        <ImageBlock
          imageSrc={status1}
          imageAlt="The home page of the status platform (left) and bug report form (right)."
          imageStyle="md:max-w-[800px]"
          caption="☝🏻 The home page of the status platform (left) and bug report form (right)."
        />
        <TextBlock
          heading="The Precision Puzzle"
          body={[
            "One of the most significant challenges we encountered was ensuring the accuracy of real-time status updates, particularly when displaying service downtime intervals. We needed to provide this information down to the millisecond while also accounting for timezone variations to ensure that users received accurate and relevant updates based on their location. Through careful consideration and testing, we were able to overcome these challenges and provide users with a reliable and precise view of our services' status.",
          ]}
        />
        <ImageBlock
          imageSrc={status2}
          imageAlt="Hovering over a time interval bar, each representing a precise temporal component."
          imageStyle="md:max-w-[695px]"
          caption="☝🏻 Hovering over a time interval bar, each representing a precise temporal component."
        />
        <TextBlock
          heading="Bringing Transparency"
          body={[
            "The successful deployment of the status platform, coupled with a targeted marketing campaign on Instagram, resulted in an immediate and noticeable improvement in communication with our user base. We began receiving bug reports through the platform, allowing us to address issues proactively and keep users informed about our progress.",
          ]}
        />
        <TextBlock
          heading="The Next Phase"
          body={[
            "While the initial launch of the status platform was a success, we identified several areas for future enhancement. To further streamline the management of the platform, we plan to develop a dedicated admin page for AppDev members. This interface will provide a centralized hub for managing app status, reviewing bug reports, and managing subscribers, eliminating the need to rely on external tools like Postman.",
            "Additionally, we aim to implement a notification system that will automatically alert the AppDev team whenever a new bug report is submitted. This will enable us to respond to user feedback more promptly and effectively, further enhancing our commitment to transparency and user satisfaction. This admin page will seamlessly integrate with the existing status platform, providing a comprehensive and user-friendly experience for both users and administrators.",
          ]}
        />
        <ImageBlock
          imageSrc={status3}
          imageAlt="Me (middle), Zach Seidner (left), and Archit Mehta (right) in the last hour of our 13-hour hack."
          imageStyle="md:max-w-[800px]"
          caption="☝🏻 Me (middle), Zach Seidner (left), and Archit Mehta (right) in the last hour of our 13-hour hack."
        />
        <LinksCell
          github="https://github.com/cuappdev/app-status"
          website="https://status.cornellappdev.com/"
        />
      </motion.div>

      {/* Next */}
      <NextCell
        prevText="Uplift"
        prevLink="/uplift"
        nextText="Grabbit"
        nextLink="/grabbit"
      />
    </>
  );
}
