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
      <g>
        <path d="M64 11.525C81.1 11.525 83.125 11.6 89.85 11.9C96.1 12.175 99.475 13.225 101.725 14.1C104.7 15.25 106.85 16.65 109.075 18.875C111.325 21.125 112.7 23.25 113.85 26.225C114.725 28.475 115.775 31.875 116.05 38.1C116.35 44.85 116.425 46.875 116.425 63.95C116.425 81.05 116.35 83.075 116.05 89.8C115.775 96.05 114.725 99.425 113.85 101.675C112.7 104.65 111.3 106.8 109.075 109.025C106.825 111.275 104.7 112.65 101.725 113.8C99.475 114.675 96.075 115.725 89.85 116C83.1 116.3 81.075 116.375 64 116.375C46.9 116.375 44.875 116.3 38.15 116C31.9 115.725 28.525 114.675 26.275 113.8C23.3 112.65 21.15 111.25 18.925 109.025C16.675 106.775 15.3 104.65 14.15 101.675C13.275 99.425 12.225 96.025 11.95 89.8C11.65 83.05 11.575 81.025 11.575 63.95C11.575 46.85 11.65 44.825 11.95 38.1C12.225 31.85 13.275 28.475 14.15 26.225C15.3 23.25 16.7 21.1 18.925 18.875C21.175 16.625 23.3 15.25 26.275 14.1C28.525 13.225 31.925 12.175 38.15 11.9C44.875 11.6 46.9 11.525 64 11.525ZM64 0C46.625 0 44.45 0.075 37.625 0.375C30.825 0.675 26.15 1.775 22.1 3.35C17.875 5 14.3 7.175 10.75 10.75C7.175 14.3 5 17.875 3.35 22.075C1.775 26.15 0.675 30.8 0.375 37.6C0.075 44.45 0 46.625 0 64C0 81.375 0.075 83.55 0.375 90.375C0.675 97.175 1.775 101.85 3.35 105.9C5 110.125 7.175 113.7 10.75 117.25C14.3 120.8 17.875 123 22.075 124.625C26.15 126.2 30.8 127.3 37.6 127.6C44.425 127.9 46.6 127.975 63.975 127.975C81.35 127.975 83.525 127.9 90.35 127.6C97.15 127.3 101.825 126.2 105.875 124.625C110.075 123 113.65 120.8 117.2 117.25C120.75 113.7 122.95 110.125 124.575 105.925C126.15 101.85 127.25 97.2 127.55 90.4C127.85 83.575 127.925 81.4 127.925 64.025C127.925 46.65 127.85 44.475 127.55 37.65C127.25 30.85 126.15 26.175 124.575 22.125C123 17.875 120.825 14.3 117.25 10.75C113.7 7.2 110.125 5 105.925 3.375C101.85 1.8 97.2 0.7 90.4 0.4C83.55 0.075 81.375 0 64 0Z" />
        <path d="M64 31.125C45.85 31.125 31.125 45.85 31.125 64C31.125 82.15 45.85 96.875 64 96.875C82.15 96.875 96.875 82.15 96.875 64C96.875 45.85 82.15 31.125 64 31.125ZM64 85.325C52.225 85.325 42.675 75.775 42.675 64C42.675 52.225 52.225 42.675 64 42.675C75.775 42.675 85.325 52.225 85.325 64C85.325 75.775 75.775 85.325 64 85.325Z" />
        <path d="M105.85 29.825C105.85 34.075 102.4 37.5 98.175 37.5C93.925 37.5 90.5 34.05 90.5 29.825C90.5 25.575 93.95 22.15 98.175 22.15C102.4 22.15 105.85 25.6 105.85 29.825Z" />
      </g>
    </svg>
  );
}