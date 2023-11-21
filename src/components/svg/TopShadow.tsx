import React from "react";

const TopShadow = () => {
  return (
    <svg
      width="808"
      height="114"
      viewBox="0 0 808 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_760_1210)">
        <ellipse cx="404" rx="644" ry="54" fill="black" />
      </g>
      <defs>
        <filter
          id="filter0_f_760_1210"
          x="-300"
          y="-114"
          width="1408"
          height="228"
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
            stdDeviation="30"
            result="effect1_foregroundBlur_760_1210"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default TopShadow;
