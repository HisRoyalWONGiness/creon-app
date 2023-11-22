import React from "react";
import Paragraph from "./typography/Paragraph";
import SmallSubHeading from "./typography/SmallSubHeading";
import Image from "next/image";
import Tool from "./Tool";

const AITools = () => {
  return (
    <div className="">
      <div className="flex flex-row w-full overflow-x-auto tablet:flex-col gap-y-16 tablet:gap-y-5 my-24">
        <div className="w-[308px] tablet:w-auto">
          <Tool
            title="AI Prospects, Market Size, and Development Pace"
            image="/images/prospects.jpg"
            details="The AI market is one of the most dynamically growing areas of technology. According to reports, the global AI market is expected to reach $190.61 billion by 2025, with a CAGR (Compound Annual Growth Rate) of 36.6%. The key drivers behind this growth include advancements in machine learning, increasing demand for big data analytics, and growing adoption of AI technology across various sectors such as healthcare, finance, and transportation."
          />
        </div>
        <div className="w-[308px] tablet:w-auto">
          <Tool
            title="AI Tools and Market"
            image="/images/tools.jpg"
            details="AI tools refer to the technologies and software that enable computer systems to perform tasks usually requiring human intellect. The market for these tools is dynamic and diverse, encompassing areas such as Natural Language Processing (NLP), machine learning, computer vision, and robotics. With a wide range of applications, AI tools are becoming increasingly indispensable in many sectors, from healthcare to finance, retail, manufacturing, and many others."
          />
        </div>
        <div className="w-[308px] tablet:w-auto">
          <Tool
            title="AI, Crypto, and NFT Market"
            image="/images/crypto.jpg"
            details="Artificial Intelligence and blockchain technology are two groundbreaking areas leading new technological innovations. The combination of these two technologies creates intriguing possibilities. For instance, Non-Fungible Tokens (NFTs) can leverage AI to create unique digital artworks or to provide exclusive AI-based services. Meanwhile, cryptocurrencies can benefit from AI by improving security mechanisms, transaction efficiency, and service personalization. Such combination brings substantial benefits for both developers and users, paving the way for unprecedented possibilities."
          />
        </div>
      </div>
    </div>
  );
};

export default AITools;
