import React from "react";
import Lantern from "./Lantern";
import PrimaryButton from "./buttons/PrimaryButton";
import SubHeading from "./typography/SubHeading";
import GradientColorText from "./typography/GradientColorText";

const CreonPass = () => {
  return (
    <div className="laptop:h-[768px] tablet:h-[1024px] h-auto max-h-[1256px] desktop:h-[970px] py-[70px] w-full relative">
      <div className="block laptop:hidden">
        <SubHeading title="Creon pass nft" />
        <div className="flex h-34 mt-5 w-full">
          <GradientColorText
            text="Access to confidential AI tools enabling business optimization and
            development. Only NFT holders will have the ability to use a given
            tool."
          />
        </div>
      </div>
      <div className="flex flex-col-reverse tablet:flex-row h-full w-full">
        <div className="w-full tablet:w-[30%] laptop:w-1/2">
          <div className="flex flex-col font-satoshi h-full">
            <div className="hidden laptop:block max-w-[300px] uppercase font-monument tablet:max-w-[700px] laptop:max-w-[700px]">
              <SubHeading title="Creon pass nft" />
            </div>
            {/* Desktop View */}
            <div className="hidden desktop:block">
              <div className="flex h-34 mt-8 w-full">
                <GradientColorText
                  text="The Creon NFT pass unlocks access to AI projects, the Creon
                  launchpad, and a ticket to generate passive income through
                  AI-driven tools"
                />
              </div>
              <ul className="flex list-none pl-4 text-[18px] my-10 flex-col gap-y-5">
                <li>
                  Pre-launch investment opportunities for upcoming AI projects
                </li>
                <li>Free and early access to Creon built AI projects </li>
                <li>Higher allocation limits on the Creon AI Launchpad </li>
                <li>
                  Revenue share distribution from Creon built AI projects{" "}
                </li>
              </ul>
            </div>
            {/* Laptop View */}
            <div className="hidden laptop:block desktop:hidden">
              <div className="flex h-34 mt-8 w-full">
                <GradientColorText
                  text="Access to confidential AI tools enabling business optimization
                  and development. Only NFT holders will have the ability to use
                  a given tool."
                />
              </div>
              <div className="flex pl-4 text-[16px] my-10 flex-col gap-y-5">
                <p className="leading-[20.8px] max-w-[440px]">
                  Prospect to derive financial benefits through the
                  redistributed profit generated from AI tools, but only when
                  the majority of NFT holders decide to release the tool
                  publicly.
                </p>
                <div className="flex gap-x-5 max-w-[440px]">
                  <p className="leading-[20.8px] ">
                    The possibility of allocating investments into new,
                    exceptional tokenized AI tools through Creon Launchpad.
                  </p>
                  <p className="leading-[20.8px] ">
                    Early access to allocations in inspiring tokenized projects,
                    real businesses based on AI.
                  </p>
                </div>
              </div>
            </div>
            {/* Tablet View */}
            <div className="hidden tablet:block laptop:hidden">
              <div className="flex pl-4 text-[16px] my-10 flex-col gap-y-5">
                <p className="leading-[20.8px] max-w-[440px]">
                  Prospect to derive financial benefits through the
                  redistributed profit generated from AI tools, but only when
                  the majority of NFT holders decide to release the tool
                  publicly.
                </p>
                <p className="leading-[20.8px] ">
                  The possibility of allocating investments into new,
                  exceptional tokenized AI tools through Creon Launchpad.
                </p>
                <p className="leading-[20.8px] ">
                  Early access to allocations in inspiring tokenized projects,
                  real businesses based on AI.
                </p>
              </div>
            </div>
            {/* Phone View */}
            <div className="block w-full tablet:hidden">
              <div className="flex w-full pl-4 text-[16px] my-10 flex-col gap-y-10">
                <p className="leading-[20.8px] w-full">
                  Prospect to derive financial benefits through the
                  redistributed profit generated from AI tools, but only when
                  the majority of NFT holders decide to release the tool
                  publicly.
                </p>
                <div className="flex gap-x-5">
                  <p className="leading-[20.8px] ">
                    The possibility of allocating investments into new,
                    exceptional tokenized AI tools through Creon Launchpad.
                  </p>
                  <p className="leading-[20.8px] ">
                    Early access to allocations in inspiring tokenized projects,
                    real businesses based on AI.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full desktop:w-[453px] laptop:w-[240px]">
              <PrimaryButton title="Buy Creon Pass" />
            </div>
          </div>
        </div>
        <div className="flex h-[485px] tablet:h-[70%] laptop:h-full justify-center mt-10 tablet:mt-16 laptop:mt-0 items-center w-full tablet:w-[70%] laptop:w-1/2 overflow-hidden">
          <Lantern />
        </div>
      </div>
    </div>
  );
};

export default CreonPass;
