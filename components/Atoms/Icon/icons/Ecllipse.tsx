import * as React from "react";
import type { SVGProps } from "react";
const SvgEcllipse = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 134 134"
    {...props}
  >
    <circle cx={67} cy={67} r={67} fill="url(#ecllipse_svg__a)" />
    <defs>
      <linearGradient
        id="ecllipse_svg__a"
        x1={134}
        x2={3.692}
        y1={67}
        y2={67}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#8F01FE" />
        <stop offset={1} stopColor="#FF2674" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgEcllipse;
