import type { SVGProps } from "react";
import React from "react";

const IconCheck = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        id="mask0_5943_2176"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <rect width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_5943_2176)">
        <path
          d="M9.55001 15.5155L18.1885 6.87702C18.3372 6.72819 18.5112 6.65219 18.7105 6.64902C18.9098 6.64585 19.0871 6.72185 19.2423 6.87702C19.3974 7.03219 19.475 7.21035 19.475 7.41152C19.475 7.61285 19.3974 7.7911 19.2423 7.94627L10.1828 17.0213C10.0019 17.2019 9.79101 17.2923 9.55001 17.2923C9.30901 17.2923 9.09809 17.2019 8.91726 17.0213L4.74226 12.8463C4.59359 12.6974 4.52026 12.5208 4.52226 12.3163C4.52409 12.1119 4.60259 11.9322 4.75776 11.777C4.91292 11.6219 5.09109 11.5443 5.29226 11.5443C5.49359 11.5443 5.67184 11.6219 5.82701 11.777L9.55001 15.5155Z"
          fill="#191919"
        />
      </g>
    </svg>
  );
};

export default IconCheck;