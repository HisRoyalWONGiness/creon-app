import React, { FC } from "react";

interface ConnectButtonProps {
  title: string;
}

const ButtonWhite: FC<ConnectButtonProps> = ({ title }) => {
  return (
    <button className="w-[132px] h-[38px] border-[2px] border-white rounded-[6px]">
      {title}
    </button>
  );
};

export default ButtonWhite;
