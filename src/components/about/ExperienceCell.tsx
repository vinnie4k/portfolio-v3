import appdevImg from "@/../public/about/appdev.png";
import glassdoorImg from "@/../public/about/glassdoor.png";
import lawnstackImg from "@/../public/about/lawnstack.png";
import lloungeImg from "@/../public/about/llounge.png";
import placeholderImg from "@/../public/placeholder.png";
import { Experience } from "@/models/enums";

interface Props {
  experience: Experience;
}

export default function ExperienceCell({ experience }: Props) {
  let company = "";
  let position = "";
  let year = "";
  let imageSrc = placeholderImg;
  let imageAlt = "";
  let style = "";
  let href = "";

  switch (experience) {
    case Experience.Glassdoor: {
      company = "Glassdoor";
      position = "Software Engineer Intern";
      year = "2024";
      imageSrc = glassdoorImg;
      imageAlt = "Glassdoor Logo";
      style = "md:absolute md:top-0 md:left-[50%] md:right-0";
      href = "https://www.glassdoor.com/index.htm";
      break;
    }
    case Experience.Lawnstack: {
      company = "Lawnstack";
      position = "Software Engineer Intern";
      year = "2024";
      imageSrc = lawnstackImg;
      imageAlt = "Lawnstack Logo";
      style =
        "md:absolute md:top-[72px] lg:top-[88px] md:left-[35%] md:right-[30%]";
      href = "https://lawnstack.com/";
      break;
    }
    case Experience.Llounge: {
      company = "llounge";
      position = "Software Engineer Intern";
      year = "2023";
      imageSrc = lloungeImg;
      imageAlt = "llounge Logo";
      style =
        "md:absolute md:top-[144px] lg:top-[176px] md:left-[10%] md:right-[55%]";
      href = "https://www.llounge.app/";
      break;
    }
    case Experience.AppDev: {
      company = "Cornell AppDev";
      position = "iOS Lead Engineer";
      year = "2023-24";
      imageSrc = appdevImg;
      imageAlt = "Cornell AppDev Logo";
      style =
        "md:absolute md:top-[216px] lg:top-[264px] md:left-0 md:right-[40%]";
      href = "https://www.cornellappdev.com/";
      break;
    }
  }

  return (
    <a
      href={href}
      className={`flex flex-row justify-between items-center bg-primary-200 dark:bg-primary-800 py-3 md:py-2 lg:py-3 px-6 md:px-3 lg:px-6 rounded-[48px] animate-opacity ${style}`}
    >
      <div className="flex flex-row gap-3 items-center">
        <img src={imageSrc.src} alt={imageAlt} className="rounded-[16px] w-8" />
        <div className="flex flex-col">
          <p className="b1 font-medium text-neutral-900 dark:text-neutral-100">
            {company}
          </p>
          <p className="label text-neutral-700 dark:text-neutral-300">
            {position}
          </p>
        </div>
      </div>
      <p className="b1 font-medium text-neutral-900 dark:text-neutral-100">
        {year}
      </p>
    </a>
  );
}
