import AITools from "@/components/AITools";
import CreonPass from "@/components/CreonPass";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProfitingThrough from "@/components/ProfitingThrough";
import Tokens from "@/components/Tokens";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative bg-hero-background-4 h-[812px] tablet:h-[1024px] tablet:bg-hero-background-3 laptop:h-[768px] laptop:bg-hero-background-2 desktop:h-[970px] desktop:bg-hero-background desktop:bg-left bg-no-repeat bg-cover w-full">
        <Navbar />
        <div className="absolute top-0 bg-gradient-to-t from-[#000000] via-[#3D8BFF] to-[#AB23FF] opacity-40 w-full h-full"></div>
        <Hero />
      </div>
      <main className="">
        <div className="desktop:px-[250px] px-[15px] tablet:px-[30px] w-full">
          <div className="hidden desktop:block">
            <CreonPass />
            <ProfitingThrough />
            <Vision />
            <Tokens />
          </div>
          <div className="block desktop:hidden">
            <Vision />
            <ProfitingThrough />
            <AITools />
            <CreonPass />
            <Tokens />
          </div>
        </div>
        <div className="desktop:px-[250px] px-[15px] tablet:px-[30px] w-full bg-bottom-background">
          <div>
            <div className="hidden desktop:block">
              <AITools />
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}
