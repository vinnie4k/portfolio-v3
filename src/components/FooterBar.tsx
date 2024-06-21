import Image from "next/image";
import githubIcon from "../../public/icons/github-dk.svg";
import linkedinIcon from "../../public/icons/linkedin.svg";
import instagramIcon from "../../public/icons/instagram.svg";

export default function FooterBar() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="b2 text-neutral-600">
        Designed and developed by Vin © 2024
      </p>
      <div className="flex flex-row gap-8">
        <a href="https://github.com/vinnie4k" target="_blank">
          <Image
            src={githubIcon}
            alt="GitHub Icon"
            width={20}
            className="animate-opacity"
          />
        </a>
        <a href="https://www.linkedin.com/in/vin-bui/" target="_blank">
          <Image
            src={linkedinIcon}
            alt="LinkedIn Icon"
            width={20}
            className="animate-opacity"
          />
        </a>
        <a href="https://www.instagram.com/vin.bui/" target="_blank">
          <Image
            src={instagramIcon}
            alt="Instagram Icon"
            width={20}
            className="animate-opacity"
          />
        </a>
      </div>
    </div>
  );
}
