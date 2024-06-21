import * as React from "react";
import { SVGProps } from "react";

const LinkedInSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="current"
        d="M19.024 0H1.976A1.476 1.476 0 0 0 .5 1.476v17.048A1.476 1.476 0 0 0 1.976 20h17.048a1.476 1.476 0 0 0 1.476-1.476V1.476A1.476 1.476 0 0 0 19.024 0ZM6.46 17.038H3.454V7.486h3.007v9.552ZM4.956 6.162a1.726 1.726 0 1 1 1.736-1.724 1.702 1.702 0 0 1-1.736 1.724Zm12.588 10.884H14.54v-5.218c0-1.54-.654-2.014-1.499-2.014-.891 0-1.766.672-1.766 2.053v5.179H8.267V7.493h2.891v1.324h.04c.29-.588 1.306-1.592 2.858-1.592 1.677 0 3.49.996 3.49 3.912l-.002 5.909Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h20v20H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default LinkedInSvg;
