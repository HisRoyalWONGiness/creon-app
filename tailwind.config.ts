import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: "375px",
        tablet: "768px",
        laptop: "1024px",
        desktop: "1920px",
      },

      backgroundImage: {
        "hero-background": "url('/images/hero.jpg')",
        "hero-background-2": "url('/images/hero2.jpg')",
        "hero-background-3": "url('/images/hero3.jpg')",
        "hero-background-4": "url('/images/hero4.jpg')",
      },
      fontFamily: {
        sans: ['"Satoshi"', "sans-serif"],
        satoshi: ["Satoshi"],
        "satoshi-medium": ["Satoshi-Medium"],
        "satoshi-light": ["Satoshi-Light"],
        "satoshi-bold": ["Satoshi-Bold"],
        "satoshi-black": ["Satoshi-Black"],
        monument: "Monument",
        "monument-bold": "Monument-Bold",
      },
    },
  },
  plugins: [],
};
export default config;
