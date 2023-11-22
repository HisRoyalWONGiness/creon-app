import React, { FC } from "react";

interface HeadingProps {
  text: string;
}

const SmallHeading: FC<HeadingProps> = ({ text }) => {
  return (
    <h3 className="font-bold w-full font-satoshi leading-[23.6px] desktop:leading-[28.4px] text-white text-[18px] desktop:text-[22px]">
      {text}
    </h3>
  );
};

export default SmallHeading;
