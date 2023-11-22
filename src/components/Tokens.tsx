import React from "react";
import Token from "./Token";

const Tokens = () => {
  return (
    <div>
      <div className="hidden laptop:grid w-full overflow-x-auto grid-cols-3 gap-x-5 laptop:gap-x-8 mt-24">
        <div className="flex-1">
          <Token
            title="Token"
            image="/images/token.jpg"
            subText="The Gateway token to the world of AI"
            details="Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects."
          />
        </div>

        <div className="flex-1">
          <Token
            title="Revenue"
            image="/images/revenue.jpg"
            subText="Driving income and growth through decentralization"
            details="CREON NFT and token holders are integral participants in the profit-sharing from our launched AI-based enterprises. We support the development of AI tools, ensuring a steady revenue stream, all while allowing early investors to enjoy the benefits of their support."
          />
        </div>

        <div className="flex-1">
          <Token
            title="Launchpad"
            image="/images/launchpad.jpg"
            subText="Driving the future of AI Innovation"
            details="The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors."
          />
        </div>
      </div>

      <div className="flex laptop:hidden w-full overflow-x-auto gap-x-6 mt-24">
        <div className="">
          <Token
            title="Token"
            image="/images/token2.jpg"
            subText="Empowering NFT Holders and Shaping AI Development"
            details="Launching in the second half of 2024, the CREON token represents first bridge between AI tools and blockchain technology, giving NFT holders and token users unprecedented access and influence."
          />
        </div>

        <div className="">
          <Token
            title="Revenue"
            image="/images/revenue2.jpg"
            subText="Harnessing AI for Profit Generation"
            details="As an integral part of our project, AI Income offers the opportunity to benefit from a genuine, profit-generating AI-based business. This facet of our initiative leverages the power of selected exclusive AI tools to create a profit stream."
          />
        </div>

        <div className="">
          <Token
            title="Launchpad"
            image="/images/launchpad2.jpg"
            subText="Unlocking Tokenized AI Projects"
            details="AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors."
          />
        </div>
      </div>
    </div>
  );
};

export default Tokens;
