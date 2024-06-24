"use client";

import { Project } from "@/constants";
import placeholderImg from "../../public/placeholder.png";
import announcementsImg from "../../public/announcements/announcements-main.png";
import upliftImg from "../../public/uplift/uplift-main.png";
import statusImg from "../../public/status/status-main.png";
import grabbitImg from "../../public/grabbit/grabbit-main.png";
import volumeImg from "../../public/volume/volume-main.png";
import scribblyImg from "../../public/scribbly/scribbly-main.png";
import { motion } from "framer-motion";

interface props {
  project: Project;
}

export default function WorkCell({ project }: props) {
  let src = "";
  let subtitle = "";
  let title = "";
  let imageSrc = placeholderImg;
  let imageAlt = "";
  let gradient = "";
  let imageStyle = "";

  switch (project) {
    case Project.Announcements: {
      src = "/announcements";
      subtitle = "Web App";
      title = "Announcements";
      imageSrc = announcementsImg;
      imageAlt = "Image of the Announcements project";
      gradient = "grad-announcements";
      imageStyle = "w-[324px] md:w-[568px] lg:w-[720px] mx-auto";
      break;
    }
    case Project.Uplift: {
      src = "/uplift";
      subtitle = "Mobile App";
      title = "Uplift";
      imageSrc = upliftImg;
      imageAlt = "Image of the Uplift project";
      gradient = "grad-uplift";
      imageStyle = "w-[160px] md:w-[320px] lg:w-[400px] mx-auto";
      break;
    }
    case Project.Status: {
      src = "/status";
      subtitle = "Web App";
      title = "Status Platform";
      imageSrc = statusImg;
      imageAlt = "Image of the Status Platform project";
      gradient = "grad-status";
      imageStyle = "w-[324px] md:w-[568px] lg:w-[720px] mx-auto";
      break;
    }
    case Project.Grabbit: {
      src = "/grabbit";
      subtitle = "Mobile App";
      title = "Grabbit";
      imageSrc = grabbitImg;
      imageAlt = "Image of the Grabbit project";
      gradient = "grad-grabbit";
      imageStyle = "w-[240px] md:w-[448px] lg:w-[560px] mx-auto";
      break;
    }
    case Project.Volume: {
      src = "/volume";
      subtitle = "Mobile App";
      title = "Volume";
      imageSrc = volumeImg;
      imageAlt = "Image of the Volume project";
      gradient = "grad-volume";
      imageStyle = "w-[240px] md:w-[448px] lg:w-[560px] mx-auto";
      break;
    }
    case Project.Scribbly: {
      src = "/scribbly";
      subtitle = "Mobile App";
      title = "Scribbly";
      imageSrc = scribblyImg;
      imageAlt = "Image of the Scribbly project";
      gradient = "grad-scribbly";
      imageStyle =
        "w-[160px] md:w-[320px] lg:w-[400px] m-auto absolute left-0 right-0 top-0 bottom-0";
      break;
    }
  }

  return (
    <a
      href={src}
      className={`${gradient} flex flex-col gap-4 md:gap-8 p-6 md:p-12 pb-0 md:pb-0 rounded-[16px] md:rounded-[24px] h-[320px] md:h-[560px] lg:h-[624px] animate-work-cell overflow-hidden ${
        project === Project.Scribbly && "dark relative"
      }`}
    >
      <div className="flex flex-col gap-1 text-end">
        <p className="b1 text-neutral-700 dark:text-neutral-300">{subtitle}</p>
        <h3 className="text-neutral-900 dark:text-neutral-100">{title}</h3>
      </div>
      <motion.img
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        viewport={{ once: true }}
        src={imageSrc.src}
        alt={imageAlt}
        className={imageStyle}
      />
    </a>
  );
}
