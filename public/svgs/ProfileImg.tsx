import type { SVGProps } from "react";
import React from "react";

const ProfileImg = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="52"
      height="52"
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="52" height="52" rx="26" fill="#FFBA99" />
      <path
        d="M26.0002 26C29.6821 26 32.6668 23.0153 32.6668 19.3334C32.6668 15.6515 29.6821 12.6667 26.0002 12.6667C22.3183 12.6667 19.3335 15.6515 19.3335 19.3334C19.3335 23.0153 22.3183 26 26.0002 26Z"
        fill="#FF7433"
      />
      <path
        d="M25.9999 29.3333C19.3199 29.3333 13.8799 33.8133 13.8799 39.3333C13.8799 39.7066 14.1732 40 14.5465 40H37.4532C37.8266 40 38.1199 39.7066 38.1199 39.3333C38.1199 33.8133 32.6799 29.3333 25.9999 29.3333Z"
        fill="#FF7433"
      />
    </svg>
  );
};

export default ProfileImg;
