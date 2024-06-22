import ArrowLeft from "@/icons/ArrowLeft";
import ArrowRight from "@/icons/ArrowRight";

interface props {
  prevText: string;
  prevLink: string;
  nextText: string;
  nextLink: string;
}

export default function NextCell({
  prevText,
  prevLink,
  nextText,
  nextLink,
}: props) {
  return (
    <div className="flex flex-col justify-center gap-6 p-12 rounded-[24px] border-2 border-primary-200 dark:border-primary-800">
      <a
        href={prevLink}
        className="flex flex-col items-start animate-underline underline-offset-[8px] hover:underline-offset-[12px]"
      >
        <ArrowLeft
          width={32}
          className="stroke-neutral-800 dark:stroke-neutral-200"
        />
        <h3 className="text-neutral-800 dark:text-neutral-200">{prevText}</h3>
      </a>
      <a
        href={nextLink}
        className="flex flex-col items-end animate-underline underline-offset-[8px] hover:underline-offset-[12px]"
      >
        <ArrowRight
          width={32}
          className="stroke-neutral-800 dark:stroke-neutral-200"
        />
        <h3 className="text-neutral-800 dark:text-neutral-200">{nextText}</h3>
      </a>
    </div>
  );
}
