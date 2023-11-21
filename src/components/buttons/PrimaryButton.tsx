import React, { FC } from "react";

interface PrimaryButton {
  title: string;
}

const PrimaryButton: FC<PrimaryButton> = ({ title }) => {
  return (
    <button className="w-full font-satoshi font-bold bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] rounded-[6px] text-[18px] leading-[19.8] h-[54px] flex justify-center items-center">
      {title}
    </button>
  );
};

export default PrimaryButton;
