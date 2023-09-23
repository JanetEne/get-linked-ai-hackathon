import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 23 23"
    {...props}
  >
    <circle cx={11.5} cy={11.5} r={11} stroke="url(#arrowBack_svg__a)" />
    <path stroke="#fff" d="M12.267 9.2 9.2 12.267l3.067 2.3" />
    <defs>
      <linearGradient
        id="arrowBack_svg__a"
        x1={11.5}
        x2={11.5}
        y1={0}
        y2={23}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#903AFF" />
        <stop offset={1} stopColor="#FF26B9" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgArrowBack;
