import React, { FC } from "react";

interface TextProps {
  text: string;
}

const Paragraph: FC<TextProps> = ({ text }) => {
  return (
    <p className="w-full font-satoshi leading-[20.8px] desktop:leading-[23.4px] font-normal text-white text-[16px] desktop:text-[18px]">
      {text}
    </p>
  );
};

export default Paragraph;
