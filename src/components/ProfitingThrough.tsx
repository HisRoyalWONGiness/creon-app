import React from "react";
import GradientColorText from "./typography/GradientColorText";
import SubHeading from "./typography/SubHeading";
import Image from "next/image";
import SmallHeading from "./typography/SmallHeading";
import Paragraph from "./typography/Paragraph";

const ProfitingThrough = () => {
  return (
    <div className="mb-16">
      <div className="h-44 w-full">
        <div className="uppercase">
          <SubHeading title="Profiting Through" />
        </div>
        <div className="uppercase float-right">
          <GradientColorText
            text="AI Innovation & Decentralization"
            size="medium"
          />
        </div>
      </div>
      <div className="flex flex-col laptop:flex-row gap-14">
        <div className="relative desktop:w-[70%] laptop:w-[60%]">
          <div className="hidden desktop:block w-full">
            <Image
              style={{ maxWidth: "auto", height: "100%", zIndex: 1 }}
              width={10000}
              height={10000}
              src="/images/world.jpg"
              alt="world"
            />
          </div>
          <div className="block desktop:hidden">
            <Image
              style={{ maxWidth: "100%", height: "auto", zIndex: 1 }}
              width={10000}
              height={10000}
              src="/images/hitech.jpg"
              alt="world"
            />
          </div>
          <div className="absolute top-0 bg-gradient-to-t from-[#3D8BFF] to-[#AB23FF] opacity-30 w-full h-full"></div>
        </div>
        <div className="hidden desktop:flex desktop:w-[30%] w-[40%] flex-col gap-y-8 justify-center">
          <SmallHeading text="The dynamic community driven business model of the future." />
          <Paragraph
            text="At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch."
          />
        </div>
        <div className="flex desktop:hidden desktop:w-[30%] laptop:w-[40%] flex-col gap-y-8 justify-center">
          <SmallHeading text="A Dynamic Business Model for Sustainable Growth and Community Engagement" />
          <Paragraph
            text="At Creon, we merge AI tools with the crypto and NFT markets, leveraging a dynamic business model to generate profits. Our commitment to innovation and decentralization allows us to strengthen our market position and foster a sustainable ecosystem.
            We empower our community, ensuring transparency and actively involving NFT holders in our success."
          />
        </div>
      </div>
    </div>
  );
};

export default ProfitingThrough;
