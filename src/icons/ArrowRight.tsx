import { IconProps } from "@/constants";

export default function ({ width, height, className }: IconProps) {
  return (
    <svg
      width={width}
      height={height || width}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M101.331 63.9974H26.6641M101.331 63.9974L79.9974 85.3307M101.331 63.9974L79.9974 42.6641"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
