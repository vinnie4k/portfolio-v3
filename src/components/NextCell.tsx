import Image from "next/image";
import Link from "next/link";
import leftArrowIcon from "../../public/icons/arrow-left.svg";
import rightArrowIcon from "../../public/icons/arrow-right.svg";

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
    <div className="flex flex-col justify-center gap-6 p-12 rounded-[24px] border-2 border-primary-200">
      <Link
        href={prevLink}
        className="flex flex-col items-start animate-underline underline-offset-[8px] hover:underline-offset-[12px]"
      >
        <Image src={leftArrowIcon} alt="Left Arrow Icon" width={32} />
        <h3 className="text-neutral-800">{prevText}</h3>
      </Link>
      <Link
        href={nextLink}
        className="flex flex-col items-end animate-underline underline-offset-[8px] hover:underline-offset-[12px]"
      >
        <Image src={rightArrowIcon} alt="Right Arrow Icon" width={32} />
        <h3 className="text-neutral-800">{nextText}</h3>
      </Link>
    </div>
  );
}
