"use client";
import { useState } from "react";
import Logo from "./svg/Logo";
import Hamburger from "./svg/Hamburger";
import ButtonWhite from "./buttons/ButtonWhite";
import Close from "./svg/Close";
import Telegram from "./svg/Telegram";
import Discord from "./svg/Discord";
import Twitter from "./svg/Twitter";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { text: "Creon Pass", href: "#", soon: false },
    { text: "Token", href: "#", soon: true },
    { text: "AI Revenue", href: "#", soon: true },
    { text: "AI Launchpad", href: "#", soon: true },
  ];

  return (
    <nav
      className={`text-white z-50 font-monument py-4 px-[30px] ${
        isOpen ? "w-2/3" : "w-full"
      }`}
    >
      <div className="flex z-50 items-center justify-between">
        <div className="z-50 font-bold">
          <Logo />
        </div>

        {/* Desktop Menu */}
        <div className="hidden z-50 font-satoshi font-bold text-[18px] pr-[40px] laptop:flex">
          <div className="flex items-center h-full w-full gap-x-[40px] text-white p-4">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center gap-x-[4px]">
                <a className="" href={item.href}>
                  {item.text}{" "}
                </a>
                {item.soon && (
                  <span className="top-0 -right-12 uppercase bg-black text-[10px] font-bold rounded-[100px] pt-[2px] pr-[4px] pb-[1px] pl-[4px] mb-4 text-[#AB23FF]">
                    Soon
                  </span>
                )}
              </div>
            ))}
            <ButtonWhite title="Connect" />
          </div>
        </div>
        <div className="flex lg:hidden gap-x-5 items-center">
          <div className="">
            <ButtonWhite size="small" title="Connect" />
          </div>

          <button
            className="z-50 transition-all duration-150 active:scale-90"
            onClick={toggleNavbar}
          >
            <Hamburger />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Overlay for the entire screen */}
          <div
            className="fixed inset-0 bg-black opacity-60 z-40"
            onClick={closeNavbar}
          ></div>
        </>
      )}

      <div
        className={`lg:hidden fixed inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-2/3 z-50`}
      >
        <div className="flex flex-col items-center h-full bg-black text-white px-8 py-4">
          <div className="flex justify-between w-full">
            <ButtonWhite title="Connect" />
            <div
              className="transition-all duration-150 active:scale-90"
              onClick={closeNavbar}
            >
              <Close />
            </div>
          </div>
          <div className="mt-16 flex flex-col">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="flex border-b-[1px] first:border-t-[1px] w-max py-5 border-gray-900 items-center gap-x-[4px]"
              >
                <a className="" href={item.href}>
                  {item.text}{" "}
                </a>
                {item.soon && (
                  <span className="top-0 -right-12 uppercase bg-black text-[10px] font-bold rounded-[100px] pt-[2px] pr-[4px] pb-[1px] pl-[4px] mb-4 text-[#AB23FF]">
                    Soon
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="absolute bottom-1 left-6">
            <div className="flex gap-3 mb-5">
              <Telegram /> <Discord /> <Twitter />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
