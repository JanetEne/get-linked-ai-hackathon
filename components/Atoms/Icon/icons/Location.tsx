import * as React from "react";
import type { SVGProps } from "react";
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 15"
    {...props}
  >
    <path
      fill="#F8F8F8"
      d="M6.5 0c1.724 0 3.377.677 4.596 1.883A6.393 6.393 0 0 1 13 6.429c0 2.661-2.051 5.45-6.067 8.428a.727.727 0 0 1-.866 0C2.05 11.88 0 9.09 0 6.43c0-1.705.685-3.34 1.904-4.546A6.537 6.537 0 0 1 6.5 0Zm0 4.286c-.575 0-1.126.225-1.532.627a2.131 2.131 0 0 0-.635 1.516c0 .568.229 1.113.635 1.515.406.402.957.627 1.532.627.575 0 1.126-.225 1.532-.627.406-.402.635-.947.635-1.515 0-.569-.229-1.114-.635-1.516A2.179 2.179 0 0 0 6.5 4.286Z"
    />
  </svg>
);
export default SvgLocation;
