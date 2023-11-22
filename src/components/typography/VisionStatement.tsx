import React from "react";

const VisionStatement = () => {
  return (
    <div className="font-monument w-full max-w-[669px] text-[22px] leading-[26.4px] desktop:text-[38px] desktop:leading-[45.6px] tablet:text-[28px] tablet:leading-[33.6px]">
      <div className="hidden desktop:block">
        Our vision is to support the innovation of AI blockchain projects{" "}
        <span className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] bg-clip-text text-transparent relative">
          while prioritizing communities and democratizing profits
        </span>
      </div>
      <div className="block desktop:hidden">
        our mission is to provide unique, confidential AI-based tools, to which
        you will gain{" "}
        <span className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] bg-clip-text text-transparent relative">
          lifetime access through NFT tokens and our CREON token.
        </span>
      </div>
    </div>
  );
};

export default VisionStatement;
