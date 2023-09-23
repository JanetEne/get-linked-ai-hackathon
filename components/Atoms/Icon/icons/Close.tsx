import * as React from "react";
import type { SVGProps } from "react";
const SvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 11 11"
    {...props}
  >
    <path
      fill="#F8F8F8"
      d="M.308 10.693a1.05 1.05 0 0 0 1.485 0l3.713-3.714 3.714 3.714a1.05 1.05 0 0 0 1.485-1.486L6.991 5.494l3.714-3.714A1.05 1.05 0 0 0 9.22.295L5.506 4.009 1.793.295A1.05 1.05 0 0 0 .308 1.78L4.02 5.494.308 9.207a1.05 1.05 0 0 0 0 1.486Z"
    />
  </svg>
);
export default SvgClose;
