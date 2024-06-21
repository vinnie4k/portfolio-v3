import Image from "next/image";
import githubIcon from "../../public/icons/github-lt.svg";
import globeIcon from "../../public/icons/globe-lt.svg";
import appstoreIcon from "../../public/icons/appstore.png";
import playstoreIcon from "../../public/icons/playstore.png";

interface props {
  github: string;
  website?: string;
  appstore?: string;
  playstore?: string;
}

export default function LinksCell({
  github,
  website,
  appstore,
  playstore,
}: props) {
  return (
    <div className="flex flex-row items-center justify-around bg-neutral-900 p-12 rounded-[24px]">
      {playstore && (
        <a
          href={playstore}
          target="_blank"
          className="animate-opacity animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
        >
          <div className="flex flex-col gap-2 items-center">
            <Image src={playstoreIcon} alt="Play Store Icon" width={36} />
            <p className="b1 text-neutral-100">Play Store</p>
          </div>
        </a>
      )}

      <a
        href={github}
        target="_blank"
        className="animate-opacity animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
      >
        <div className="flex flex-col gap-2 items-center">
          <Image src={githubIcon} alt="GitHub Icon" width={36} />
          <p className="b1 text-neutral-100">GitHub</p>
        </div>
      </a>

      {website && (
        <a
          href={website}
          target="_blank"
          className="animate-opacity animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
        >
          <div className="flex flex-col gap-2 items-center">
            <Image src={globeIcon} alt="Website Icon" width={36} />
            <p className="b1 text-neutral-100">Website</p>
          </div>
        </a>
      )}

      {appstore && (
        <a
          href={appstore}
          target="_blank"
          className="animate-opacity animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
        >
          <div className="flex flex-col gap-2 items-center">
            <Image src={appstoreIcon} alt="AppStore Icon" width={36} />
            <p className="b1 text-neutral-100">App Store</p>
          </div>
        </a>
      )}
    </div>
  );
}
