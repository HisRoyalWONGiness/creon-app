import React from "react";
import PointIconOne from "./svg/PointIconOne";
import PointIconTwo from "./svg/PointIconTwo";
import PointIconThree from "./svg/PointIconThree";
import PointIconFour from "./svg/PointIconFour";
import SmallHeading from "./typography/SmallHeading";
import Paragraph from "./typography/Paragraph";

const points = [
  {
    id: "1",
    title: "Profitability and Growth",
    icon: <PointIconOne />,
    detail:
      "At Creon, we handpick cutting-edge AI projects and offer our community and token holders early access and investment opportunities. Our community actively contributes to the growth and profitability of these projects, creating a dynamic ecosystem of innovation and shared success.",
  },
  {
    id: "2",
    title: "Transparent & Fair Decentralized Earnings",
    icon: <PointIconTwo />,
    detail: "",
  },
  {
    id: "3",
    title: "Launching the future",
    icon: <PointIconThree />,
    detail: "",
  },
  {
    id: "4",
    title: "Limitless Possibilities of AI & Crypto",
    icon: <PointIconFour />,
    detail: "",
  },
];

const VisionPoints = () => {
  return (
    <div>
      <div className="flex flex-col gap-y-5">
        {points.map((point) => (
          <div key={point.id} className="">
            <div className="w-full desktop:pb-[30px] border-b border-zinc-900 flex-col">
              <div className="flex-col justify-start flex">
                <div className="flex items-center gap-5 laptop:gap-8">
                  {point.icon}
                  <div className="">
                    <SmallHeading text={point.title} />
                  </div>
                </div>
                <div className="flex-col laptop:ml-2 laptop:pl-24 pl-24 justify-start items-start flex">
                  <div className="font-normal">
                    <Paragraph text={point.detail} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisionPoints;
