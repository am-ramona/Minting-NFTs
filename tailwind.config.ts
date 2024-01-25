import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "title-gradient": "linear-gradient(90deg, #E7E7E7 1.14%, #9E9E9E 28.83%, #F2F2F2 57.49%, #949494 89.98%)"
      },
      fontFamily: {
        opSans: ['var(--font-openSans)'],
        cinzel: ['var(--font-cinzel)'],
      }
    },
  },
  plugins: [],
};
export default config;
