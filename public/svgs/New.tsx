import type { SVGProps } from "react";
import React from "react";

const New = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="40" height="40" rx="20" fill="#FF7433" />
      <path
        d="M15.0469 26V14.6875H17.3281L22.6875 22.8281H22.75V14.6875H24.75V26H22.5L17.125 17.8125H17.0469V26H15.0469Z"
        fill="#191919"
      />
    </svg>
  );
};

export default New;
