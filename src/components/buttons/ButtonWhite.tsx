import React, { FC } from "react";

interface ConnectButtonProps {
  title: string;
  size?: string;
}

const ButtonWhite: FC<ConnectButtonProps> = ({ title, size }) => {
  return (
    <button
      className={`${
        size === "small"
          ? "w-[110px] h-[30px] text-[14px]"
          : "w-[132px] h-[38px]"
      } border-[2px] border-white rounded-[6px]`}
    >
      {title}
    </button>
  );
};

export default ButtonWhite;
