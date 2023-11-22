import React, { FC } from "react";

interface HeadingProps {
  title: string;
}

const SmallSubHeading: FC<HeadingProps> = ({ title }) => {
  return (
    <h2 className="uppercase w-full font-monument leading-[26.4px] laptop:leading-[33.6px] desktop:leading-[45.6px] font-normal text-white text-[22px] laptop:text-[28px] desktop:text-[38px]">
      {title}
    </h2>
  );
};

export default SmallSubHeading;
