import React, { FC } from "react";

interface HeadingProps {
  title: string;
}

const SubHeading: FC<HeadingProps> = ({ title }) => {
  return (
    <h2 className="uppercase w-full font-monument leading-[35.2px] tablet:leading-[48.4px] laptop:leading-[48.4px] font-normal text-white text-[32px] tablet:text-[44px] laptop:text-[44px] desktop:text-[68px]">
      {title}
    </h2>
  );
};

export default SubHeading;
