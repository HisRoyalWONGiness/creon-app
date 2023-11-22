import Image from "next/image";
import React, { FC } from "react";
import GradientColorText from "./typography/GradientColorText";
import SmallSubHeading from "./typography/SmallSubHeading";
import Paragraph from "./typography/Paragraph";

interface TokenProps {
  title: string;
  subText: string;
  details: string;
  image: string;
}

const Token: FC<TokenProps> = ({ title, subText, details, image }) => {
  return (
    <div className="relative w-[308px] laptop:w-auto pb-5 bg-[#13171d] rounded-md flex-col justify-start items-start inline-flex">
      <div className="w-full">
        <div className="p-1 float-right rounded-[100px]">
          <div className="text-center bg-white rounded-[100px] p-1 text-black text-xs font-bold font-satoshi">
            COMING SOON
          </div>
        </div>
      </div>
      <div className="pl-5">
        <SmallSubHeading title={title} />
        <div className="h-[55px] laptop:h-[80px] desktop:h-[100px]">
          <GradientColorText text={subText} />
        </div>
      </div>
      <div className="desktop:h-[234px] w-full rounded-tr-lg rounded-br-lg justify-center items-center inline-flex">
        <div className="mb-8 w-full">
          <Image
            style={{
              maxWidth: "1000px",
              width: "100%",
              height: "auto",
              zIndex: 1,
            }}
            width={10000}
            height={10000}
            src={image}
            alt="dark"
          />
        </div>
      </div>
      <div className="pl-5 desktop:pt-5 text-white text-lg font-normal font-satoshi">
        <Paragraph text={details} />
      </div>
    </div>
  );
};

export default Token;
