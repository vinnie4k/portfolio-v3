import GitHubSvg from "@/svg/GitHubSvg";
import InstagramSvg from "@/svg/InstagramSvg";
import LinkedInSvg from "@/svg/LinkedInSvg";

export default function FooterBar() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="b2 text-neutral-600">
        Designed and developed by Vin © 2024
      </p>
      <div className="flex flex-row gap-8">
        <a href="https://github.com/vinnie4k" target="_blank">
          <GitHubSvg
            width={21}
            height={20}
            className="fill-neutral-900 animate-opacity"
          />
        </a>
        <a href="https://www.linkedin.com/in/vin-bui/" target="_blank">
          <LinkedInSvg
            width={21}
            height={20}
            className="fill-neutral-900 animate-opacity"
          />
        </a>
        <a href="https://www.instagram.com/vin.bui/" target="_blank">
          <InstagramSvg
            width={21}
            height={20}
            className="fill-neutral-900 animate-opacity"
          />
        </a>
      </div>
    </div>
  );
}
