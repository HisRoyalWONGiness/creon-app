import Image from "next/image";
import React, { FC } from "react";
import SmallSubHeading from "./typography/SmallSubHeading";
import Paragraph from "./typography/Paragraph";

interface ToolProps {
  title: string;
  details: string;
  image: string;
}

const Tool: FC<ToolProps> = ({ title, details, image }) => {
  return (
    <div className="flex w-[308px] tablet:w-auto flex-col-reverse tablet:flex-none tablet:grid tablet:grid-cols-3 pl-8 items-center bg-[#13171d] gap-16">
      <div className="tablet:col-span-2">
        <div className="mb-5">
          <SmallSubHeading title={title} />
        </div>
        <Paragraph text={details} />
      </div>
      <div className="relative h-full w-full bg-red-600">
        <Image
          style={{
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
          width={300}
          height={300}
          objectFit="cover"
          src={image}
          alt="dark"
        />
        {/* <Image
          src={image}
          alt="Alt text for the picture"
          layout="fill"
          objectFit="cover"
          quality={100}
        /> */}
      </div>
    </div>
  );
};

export default Tool;
