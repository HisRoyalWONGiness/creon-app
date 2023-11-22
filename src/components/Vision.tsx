import React from "react";
import SubHeading from "./typography/SubHeading";
import VisionStatement from "./typography/VisionStatement";
import Image from "next/image";
import VisionPoints from "./VisionPoints";

const Vision = () => {
  return (
    <div className="w-full mt-44">
      <div className="block laptop:hidden mb-10">
        <VisionStatement />
      </div>
      <div className="flex flex-col tablet:flex-row-reverse laptop:flex-row laptop:gap-10 gap-5 w-full">
        <div className="flex flex-col self-end w-full tablet:w-[50%] desktop:w-[60%]">
          <div className="hidden laptop:block">
            <VisionStatement />
          </div>
          <div className="w-[70%] self-end tablet:w-[100%] overflow-hidden laptop:w-[100%]">
            <Image
              style={{
                maxWidth: "1000px",
                width: "100%",
                height: "auto",
                zIndex: 1,
              }}
              width={10000}
              height={10000}
              src="/images/Image.jpg"
              alt="dark"
            />
          </div>
        </div>
        <div className="desktop:w-[40%] w-full tablet:w-[50%]">
          <VisionPoints />
        </div>
      </div>
    </div>
  );
};

export default Vision;
