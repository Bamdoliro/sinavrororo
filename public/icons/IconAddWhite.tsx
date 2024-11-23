import type { SVGProps } from "react";
import React from "react";

const IconAddWhite = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M21 14.875H7C6.52167 14.875 6.125 14.4783 6.125 14C6.125 13.5217 6.52167 13.125 7 13.125H21C21.4783 13.125 21.875 13.5217 21.875 14C21.875 14.4783 21.4783 14.875 21 14.875Z"
        fill="white"
      />
      <path
        d="M14 21.875C13.5217 21.875 13.125 21.4783 13.125 21V7C13.125 6.52167 13.5217 6.125 14 6.125C14.4783 6.125 14.875 6.52167 14.875 7V21C14.875 21.4783 14.4783 21.875 14 21.875Z"
        fill="white"
      />
    </svg>
  );
};

export default IconAddWhite;
