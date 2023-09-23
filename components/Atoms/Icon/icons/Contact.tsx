import * as React from "react";
import type { SVGProps } from "react";
const SvgContact = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="#F8F8F8"
      d="M12 6a6.001 6.001 0 0 0-6-6v1.2A4.802 4.802 0 0 1 10.8 6H12ZM0 4.8v-3a.6.6 0 0 1 .6-.6h3a.6.6 0 0 1 .6.6v2.4a.6.6 0 0 1-.6.6H2.4a4.8 4.8 0 0 0 4.8 4.8V8.4a.6.6 0 0 1 .6-.6h2.4a.6.6 0 0 1 .6.6v3a.6.6 0 0 1-.6.6h-3A7.2 7.2 0 0 1 0 4.8Z"
    />
    <path
      fill="#F8F8F8"
      d="M9.326 4.623c.18.436.274.905.274 1.377H8.52A2.52 2.52 0 0 0 6 3.48V2.4a3.6 3.6 0 0 1 3.326 2.223Z"
    />
  </svg>
);
export default SvgContact;
