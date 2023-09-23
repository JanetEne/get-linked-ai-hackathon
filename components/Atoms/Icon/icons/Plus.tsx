import * as React from "react";
import type { SVGProps } from "react";
const SvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 11 10"
    {...props}
  >
    <path
      fill="#D434FE"
      d="M4.78 10V6.2H.96V4.32h3.82V.56h1.8v3.76h3.82V6.2H6.58V10h-1.8Z"
    />
  </svg>
);
export default SvgPlus;
