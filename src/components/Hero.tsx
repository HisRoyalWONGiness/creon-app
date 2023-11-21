import React from "react";

const Hero = () => {
  return (
    <div className="absolute z-50 font-monument pt-14 tablet:pr-56 laptop:pr-12 desktop:pr-0 desktop:pl-[150px] px-[15px] tablet:px-[30px] mt-[280px] tablet:mt-[350px] w-full desktop:max-w-[1440px]">
      <span className="uppercase phone:leading-[35.2px] tablet:leading-[48.4px] laptop:leading-[48.4px] font-normal text-white text-[22px] phone:text-[32px] tablet:text-[44px] laptop:text-[44px] desktop:hidden">
        Empowering AI-Crypto Innovations and Integrating AI Tools into crypto.
      </span>
      <div className="uppercase hidden desktop:block desktop:leading-[74.8px] font-normal text-white desktop:text-[68px]">
        The world&apos;s first platform for Tokenizing AI blockchain projects
      </div>
      <div className="desktop:hidden font-satoshi mt-8 w-full tablet:w-max font-bold text-[18px] leading-[23.4px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] bg-clip-text text-transparent relative">
        <span className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]"></span>
        <p className="-pr-16">
          Creon «Create On» confidential AI Tools for granting access through
          NFTs.
        </p>
        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]"></span>
      </div>
      <div className="hidden desktop:flex h-16 mt-8 w-max font-bold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] bg-clip-text text-transparent relative items-center">
        <span className="absolute left-0 right-0 top-0 h-[1px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]"></span>
        <p className="leading-[22px] font-satoshi text-[22px]">
          Hold the Creon Pass NFT and earn passive income from AI Tools
        </p>
        <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF]"></span>
      </div>
    </div>
  );
};

export default Hero;
