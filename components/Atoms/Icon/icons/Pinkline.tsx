import * as React from "react";
import type { SVGProps } from "react";
const SvgPinkline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 117 11"
    {...props}
  >
    <path
      stroke="#FF26B9"
      strokeWidth={3}
      d="M1 9C20.242 3.718 70.727-3.678 116 9"
    />
  </svg>
);
export default SvgPinkline;
