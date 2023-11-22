import React, { FC } from "react";

interface TextProps {
  text: string;
  size?: string;
}

const GradientColorText: FC<TextProps> = ({ text, size }) => {
  return (
    <div className="flex w-full mt-8 font-bold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] bg-clip-text text-transparent relative">
      {size === "medium" ? (
        <h3 className="leading-[26.4px] desktop:leading-[45.6px] laptop:leading-[33.6px] font-monument font-normal text-[22px] desktop:text-[38px] laptop:text-[28px]">
          {text}
        </h3>
      ) : (
        <p className="leading-[23.4px] desktop:leading-[28.6px] font-satoshi text-[18px] desktop:text-[22px]">
          {text}
        </p>
      )}
    </div>
  );
};

export default GradientColorText;
