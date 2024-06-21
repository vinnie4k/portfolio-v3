import { Project } from "@/constants";
import Image from "next/image";

import placeholderImg from "../../public/work/placeholder.png";
import announcementsImg from "../../public/work/announcements.png";
import upliftImg from "../../public/work/uplift.png";
import statusImg from "../../public/work/status.png";
import grabbitImg from "../../public/work/grabbit.png";
import volumeImg from "../../public/work/volume.png";
import scribblyImg from "../../public/work/scribbly.png";

interface props {
  project: Project;
}

export default function WorkCell({ project }: props) {
  let subtitle = "";
  let title = "";
  let imageSrc = placeholderImg;
  let imageAlt = "";
  let gradient = "";
  let imageWidth = 0;

  const useDarkColors = project === Project.Scribbly;

  switch (project) {
    case Project.Announcements: {
      subtitle = "Web App";
      title = "Announcements";
      imageSrc = announcementsImg;
      imageAlt = "Image of the Announcements project";
      gradient = "grad-announcements";
      imageWidth = 324;
      break;
    }
    case Project.Uplift: {
      subtitle = "Mobile App";
      title = "Uplift";
      imageSrc = upliftImg;
      imageAlt = "Image of the Uplift project";
      gradient = "grad-uplift";
      imageWidth = 160;
      break;
    }
    case Project.Status: {
      subtitle = "Web App";
      title = "Status Platform";
      imageSrc = statusImg;
      imageAlt = "Image of the Status Platform project";
      gradient = "grad-status";
      imageWidth = 324;
      break;
    }
    case Project.Grabbit: {
      subtitle = "Mobile App";
      title = "Grabbit";
      imageSrc = grabbitImg;
      imageAlt = "Image of the Grabbit project";
      gradient = "grad-grabbit";
      imageWidth = 240;
      break;
    }
    case Project.Volume: {
      subtitle = "Mobile App";
      title = "Volume";
      imageSrc = volumeImg;
      imageAlt = "Image of the Volume project";
      gradient = "grad-volume";
      imageWidth = 240;
      break;
    }
    case Project.Scribbly: {
      subtitle = "Mobile App";
      title = "Scribbly";
      imageSrc = scribblyImg;
      imageAlt = "Image of the Scribbly project";
      gradient = "grad-scribbly";
      imageWidth = 160;
      break;
    }
  }

  return (
    <div
      className={`${gradient} flex flex-col gap-4 p-6 pb-0 rounded-[16px] h-[320px]`}
    >
      <div className="flex flex-col gap-1 text-end">
        <p
          className={`b1 ${
            useDarkColors ? "text-neutral-300" : "text-neutral-700"
          }`}
        >
          {subtitle}
        </p>
        <h3 className={useDarkColors ? "text-neutral-100" : "text-neutral-900"}>
          {title}
        </h3>
      </div>
      <div className="overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          placeholder="empty"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
