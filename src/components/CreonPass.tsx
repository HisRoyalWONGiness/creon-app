import React from "react";
import Lantern from "./Lantern";
import PrimaryButton from "./buttons/PrimaryButton";

const CreonPass = () => {
  return (
    <div className="desktop:px-[150px] desktop:h-[970px] px-[15px] py-[70px] tablet:px-[30px] w-full relative">
      <div className="flex justify-between h-full w-full">
        <div className="w-1/2">
          <div className="flex justify-center flex-col font-satoshi h-full phone:leading-[35.2px] tablet:leading-[48.4px] laptop:leading-[48.4px] font-normal text-white text-[22px] phone:text-[32px] tablet:text-[44px] laptop:text-[44px]">
            <div className="max-w-[300px] uppercase font-monument tablet:max-w-[700px] laptop:max-w-[400px]">
              Creon pass nft
            </div>
            <div className="hidden desktop:flex h-34 mt-8 w-full font-bold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] bg-clip-text text-transparent relative">
              <p className="leading-[28.6px] max-w-[700px] font-satoshi text-[22px]">
                The Creon NFT pass unlocks access to AI projects, the Creon
                launchpad, and a ticket to generate passive income through
                AI-driven tools
              </p>
            </div>
            <ul className="list-none text-[18px] my-10 flex flex-col gap-y-5">
              <li>
                Pre-launch investment opportunities for upcoming AI projects
              </li>
              <li>Free and early access to Creon built AI projects </li>
              <li>Higher allocation limits on the Creon AI Launchpad </li>
              <li>Revenue share distribution from Creon built AI projects </li>
            </ul>
            <div className="w-[453px]">
              <PrimaryButton title="Buy Creon Pass" />
            </div>
          </div>
        </div>
        <div className="flex h-full bg-red-400 justify-center items-center w-1/2">
          <Lantern />
        </div>
      </div>
    </div>
  );
};

export default CreonPass;
