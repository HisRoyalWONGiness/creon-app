import React from "react";

const LeftShadow = () => {
  return (
    <svg
      width="135"
      height="808"
      viewBox="0 0 135 808"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_760_1212)">
        <ellipse
          cx="-2.40061e-06"
          cy="404"
          rx="404"
          ry="85"
          transform="rotate(-90 -2.40061e-06 404)"
          fill="black"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_760_1212"
          x="-135"
          y="-50"
          width="270"
          height="908"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="25"
            result="effect1_foregroundBlur_760_1212"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default LeftShadow;
