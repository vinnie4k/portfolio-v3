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
        d="M26.6693 63.9974H101.336M26.6693 63.9974L48.0026 85.3307M26.6693 63.9974L48.0026 42.6641"
        stroke-width="16"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </svg>
  );
}
