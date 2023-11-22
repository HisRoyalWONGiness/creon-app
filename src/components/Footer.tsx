import React from "react";
import Telegram from "./svg/Telegram";
import Discord from "./svg/Discord";
import Twitter from "./svg/Twitter";
import Niftable from "./svg/Niftables";

const Footer = () => {
  return (
    <div>
      <div className="hidden tablet:flex justify-between items-center py-5 w-full">
        <div className="flex gap-16">
          <a>© Creon 2023. All rights reserved.</a>
          <div className="flex gap-3">
            <Telegram /> <Discord /> <Twitter />
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-2">
          Powered by <Niftable />
        </div>
      </div>

      <div className="flex tablet:hidden justify-between items-center py-5 w-full">
        <div className="flex w-full flex-col gap-5 justify-center items-center">
          <div className="flex gap-3 mb-5">
            <Telegram /> <Discord /> <Twitter />
          </div>
          <a>© Creon 2023. All rights reserved.</a>
          <div className="flex justify-center items-center gap-x-2">
            Powered by <Niftable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
