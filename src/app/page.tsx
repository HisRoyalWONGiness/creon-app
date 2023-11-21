import CreonPass from "@/components/CreonPass";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <div className="relative bg-hero-background-4 h-[812px] tablet:h-[1024px] tablet:bg-hero-background-3 laptop:h-[768px] laptop:bg-hero-background-2 desktop:h-[970px] desktop:bg-hero-background desktop:bg-left bg-no-repeat bg-cover w-full">
        <Navbar />
        <div className="absolute top-0 bg-gradient-to-t from-[#000000] via-[#3D8BFF] to-[#AB23FF] opacity-40 w-full h-full"></div>
        <Hero />
      </div>
      <div>
        <CreonPass />
      </div>

      <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
    </div>
  );
}
