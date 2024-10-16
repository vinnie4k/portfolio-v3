import { IconProps } from "@/models/interfaces";

export default function ({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className={className}
    >
      <path
        d="M10.0001 17.5C11.6642 17.4998 13.281 16.9461 14.5959 15.9261C15.9108 14.9062 16.8491 13.4779 17.2632 11.8662C17.6772 10.2544 17.5435 8.5507 16.883 7.02329C16.2225 5.49588 15.0728 4.2315 13.6149 3.42921C12.157 2.62692 10.4736 2.33229 8.8299 2.5917C7.18614 2.8511 5.67535 3.64982 4.53535 4.8621C3.39535 6.07437 2.69091 7.63136 2.53291 9.28794C2.37492 10.9445 2.77235 12.6066 3.66264 14.0125L2.50014 17.5L5.98764 16.3375C7.18729 17.0989 8.57928 17.5022 10.0001 17.5Z"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
