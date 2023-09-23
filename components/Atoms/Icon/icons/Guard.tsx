import * as React from "react";
import type { SVGProps } from "react";
const SvgGuard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 530 648"
    {...props}
  >
    <path
      fill="url(#guard_svg__a)"
      fillOpacity={0.14}
      d="M530 294.545C530 458.018 416.933 610.887 265 648 113.067 610.887 0 458.018 0 294.545V117.818L265 0l265 117.818v176.727ZM265 589.091c110.417-29.455 206.111-160.822 206.111-288.066V156.109L265 64.211 58.889 156.109v144.916c0 127.244 95.694 258.611 206.111 288.066Zm82.444-294.546v-44.181c0-41.237-41.222-73.637-82.444-73.637s-82.444 32.4-82.444 73.637v44.181c-17.667 0-35.334 17.673-35.334 35.346v103.091c0 20.618 17.667 38.291 35.334 38.291H344.5c20.611 0 38.278-17.673 38.278-35.346V332.836c0-20.618-17.667-38.291-35.334-38.291Zm-38.277 0h-88.334v-44.181c0-23.564 20.611-38.291 44.167-38.291s44.167 14.727 44.167 38.291v44.181Z"
    />
    <defs>
      <linearGradient
        id="guard_svg__a"
        x1={265}
        x2={265}
        y1={0}
        y2={648}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#903AFF" />
        <stop offset={1} stopColor="#FF26B9" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgGuard;
