import React from "react";
import LeftShadow from "./svg/LeftShadow";
import TopShadow from "./svg/TopShadow";
import RightShadow from "./svg/RightShadow";
import BottomShadow from "./svg/BottomShadow";
import Image from "next/image";

const Lantern = () => {
  return (
    <div className="relative h-full w-full bg-blue-600">
      <div className={"absolute top-0 left-0 h-full"}>
        <LeftShadow />
      </div>
      <div className="absolute top-0 left-0 w-full">
        <TopShadow />
      </div>
      <div className="absolute top-0 right-0 h-full">
        <RightShadow />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <BottomShadow />
      </div>
      <Image
        style={{ maxWidth: "auto", height: "100%", zIndex: 1 }}
        width={10000}
        height={10000}
        src="/images/lantern.jpg"
        alt="lantern"
      />
    </div>
  );
};

export default Lantern;
