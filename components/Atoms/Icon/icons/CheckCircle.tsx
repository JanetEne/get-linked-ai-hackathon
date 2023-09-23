import * as React from "react";
import type { SVGProps } from "react";
const SvgCheckCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 17 17"
    {...props}
  >
    <circle cx={8.5} cy={8.5} r={8.5} fill="#2DE100" />
    <path stroke="#fff" strokeWidth={2} d="m5 8 2 2.5L13.5 6" />
  </svg>
);
export default SvgCheckCircle;
