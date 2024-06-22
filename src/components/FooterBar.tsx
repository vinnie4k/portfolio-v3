import Image from "next/image";
import githubIcon from "../../public/icons/github-dk.svg";
import linkedinIcon from "../../public/icons/linkedin.svg";
import instagramIcon from "../../public/icons/instagram.svg";
import LinkedInIcon from "@/icons/LinkedInIcon";
import InstagramIcon from "@/icons/InstagramIcon";
import GitHubIcon from "@/icons/GitHubIcon";

export default function FooterBar() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="b2 text-neutral-600 dark:text-neutral-400">
        Designed and developed by Vin © 2024
      </p>
      <div className="flex flex-row gap-8">
        <a href="https://github.com/vinnie4k" target="_blank">
          <GitHubIcon
            width={20}
            className="fill-neutral-900 dark:fill-neutral-100"
          />
        </a>
        <a href="https://www.linkedin.com/in/vin-bui/" target="_blank">
          <LinkedInIcon
            width={20}
            className="fill-neutral-900 dark:fill-neutral-100"
          />
        </a>
        <a href="https://www.instagram.com/vin.bui/" target="_blank">
          <InstagramIcon
            width={20}
            className="fill-neutral-900 dark:fill-neutral-100"
          />
        </a>
      </div>
    </div>
  );
}
