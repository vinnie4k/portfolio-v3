import GitHubIcon from "@/icons/GitHubIcon";
import GlobeIcon from "@/icons/GlobeIcon";
import GooglePlayIcon from "@/icons/GooglePlayIcon";
import AppStoreIcon from "@/icons/AppStoreIcon";

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
    <div className="flex flex-row items-center justify-around bg-neutral-900 dark:bg-neutral-100 p-12 rounded-[24px]">
      {playstore && (
        <a
          href={playstore}
          target="_blank"
          className="animate-opacity-r animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
        >
          <div className="flex flex-col gap-2 items-center">
            <GooglePlayIcon
              width={36}
              className="fill-neutral-100 dark:fill-neutral-900"
            />
            <p className="b1 text-neutral-100 dark:text-neutral-900">
              Play Store
            </p>
          </div>
        </a>
      )}

      <a
        href={github}
        target="_blank"
        className="animate-opacity-r animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
      >
        <div className="flex flex-col gap-2 items-center">
          <GitHubIcon
            width={36}
            className="fill-neutral-100 dark:fill-neutral-900"
          />
          <p className="b1 text-neutral-100 dark:text-neutral-900">GitHub</p>
        </div>
      </a>

      {website && (
        <a
          href={website}
          target="_blank"
          className="animate-opacity-r animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
        >
          <div className="flex flex-col gap-2 items-center">
            <GlobeIcon
              width={36}
              className="fill-neutral-100 dark:fill-neutral-900"
            />
            <p className="b1 text-neutral-100 dark:text-neutral-900">Website</p>
          </div>
        </a>
      )}

      {appstore && (
        <a
          href={appstore}
          target="_blank"
          className="animate-opacity-r animate-underline underline-offset-[6px] hover:underline-offset-[8px]"
        >
          <div className="flex flex-col gap-2 items-center">
            <AppStoreIcon
              width={36}
              className="fill-neutral-100 dark:fill-neutral-900"
            />
            <p className="b1 text-neutral-100 dark:text-neutral-900">
              App Store
            </p>
          </div>
        </a>
      )}
    </div>
  );
}
