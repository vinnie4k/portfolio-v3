import Image from "next/image";
import placeholderImg from "../../public/placeholder.png";
import glassdoorImg from "../../public/about/glassdoor.png";
import terraImg from "../../public/about/terra.png";
import lloungeImg from "../../public/about/llounge.png";
import appdevImg from "../../public/about/appdev.png";
import { Experience } from "@/constants";

interface props {
  experience: Experience;
}

export default function ExperienceCell({ experience }: props) {
  let company = "";
  let position = "";
  let year = "";
  let imageSrc = placeholderImg;
  let imageAlt = "";

  switch (experience) {
    case Experience.Glassdoor: {
      company = "Glassdoor";
      position = "Software Engineer Intern";
      year = "2024~";
      imageSrc = glassdoorImg;
      imageAlt = "Glassdoor Logo";
      break;
    }
    case Experience.Terra: {
      company = "Terra";
      position = "Lead Software Engineer";
      year = "2024~";
      imageSrc = terraImg;
      imageAlt = "Terra Logo";
      break;
    }
    case Experience.Llounge: {
      company = "llounge";
      position = "Software Engineer Intern";
      year = "2023";
      imageSrc = lloungeImg;
      imageAlt = "llounge Logo";
      break;
    }
    case Experience.AppDev: {
      company = "Cornell AppDev";
      position = "iOS Lead Engineer";
      year = "2023-24";
      imageSrc = appdevImg;
      imageAlt = "Cornell AppDev Logo";
      break;
    }
  }

  return (
    <div className="flex flex-row justify-between items-center bg-primary-200 py-3 px-6 rounded-[48px]">
      <div className="flex flex-row gap-3 items-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={32}
          className="rounded-[16px]"
        />
        <div className="flex flex-col">
          <p className="b1 font-medium text-neutral-900">{company}</p>
          <p className="label text-neutral-700">{position}</p>
        </div>
      </div>
      <p className="b1 font-medium text-neutral-900">{year}</p>
    </div>
  );
}
