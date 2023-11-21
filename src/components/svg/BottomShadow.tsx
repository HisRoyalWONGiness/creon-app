import React from "react";

const BottomShadow = () => {
  return (
    <svg
      width="808"
      height="127"
      viewBox="0 0 808 127"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_760_1209)">
        <ellipse cx="404" cy="127" rx="644" ry="67" fill="black" />
      </g>
      <defs>
        <filter
          id="filter0_f_760_1209"
          x="-300"
          y="0"
          width="1408"
          height="254"
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
            result="effect1_foregroundBlur_760_1209"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BottomShadow;
