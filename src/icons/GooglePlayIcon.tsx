import { IconProps } from "@/constants";

export default function ({ width, height, className }: IconProps) {
  return (
    <svg
      width={width}
      height={height || width}
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.8444 19.0158L9.08199 2.67215C7.58513 1.82154 6.2347 1.80683 5.30379 2.46684L29.8492 27.0122L37.8444 19.0158ZM38.7462 19.5282L30.5563 27.7193L38.7502 35.9132L48.084 30.6102C50.878 29.0202 50.878 26.4222 48.084 24.8342L38.7462 19.5282ZM37.8471 36.4244L29.8492 28.4265L5.30381 52.9754C6.23472 53.635 7.58514 53.619 9.08199 52.7702L37.8471 36.4244ZM4.61501 52.25L29.1421 27.7194L4.6143 3.19156C4.22324 3.79254 4 4.60683 4 5.60414V49.8361C4 50.8356 4.22351 51.6493 4.61501 52.25Z"
      />
    </svg>
  );
}
