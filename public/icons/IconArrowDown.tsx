import type { SVGProps } from "react";
import React from "react";

const IconArrowDown = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_7178_1506"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="32"
      >
        <rect width="32" height="32" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_7178_1506)">
        <path
          d="M15.36 18.898L11.1583 14.6967C11.1006 14.6387 11.055 14.5739 11.0217 14.5023C10.9883 14.431 10.9717 14.3545 10.9717 14.2727C10.9717 14.1093 11.0269 13.9673 11.1373 13.8467C11.2478 13.7262 11.3933 13.666 11.574 13.666H20.4253C20.606 13.666 20.7516 13.7269 20.862 13.8487C20.9725 13.9702 21.0277 14.1121 21.0277 14.2743C21.0277 14.315 20.9653 14.4558 20.8407 14.6967L16.6393 18.898C16.5429 18.9947 16.4431 19.0652 16.34 19.1097C16.2369 19.1541 16.1235 19.1763 15.9997 19.1763C15.8759 19.1763 15.7625 19.1541 15.6593 19.1097C15.5562 19.0652 15.4565 18.9947 15.36 18.898Z"
          fill="#191919"
        />
      </g>
    </svg>
  );
};

export default IconArrowDown;
