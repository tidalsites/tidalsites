import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        card: "0 2px 6px 2px rgba(0, 0, 0, .25)",
      },
      maxWidth: {
        page: "90em",
        scale: "min(50ch, calc(100vw - 2rem))",
        prose: "50ch",
      },
      height: {
        navbar: "70px",
      },
      minHeight: {
        page: "calc(100vh - var(--navbar-height))",
      },
      gridTemplateColumns: {
        portfolio: "repeat(auto-fit, minmax(500px, 1fr))",
        "portfolio-lg": "repeat(auto-fit, minmax(600px, 1fr))",
      },
      keyframes: {
        shiftUp: {
          "0%": { transform: "translateY(100%)" },
          "75%": { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          to: { opacity: "1" },
        },
      },
      screens: {
        xs: "385px",
        md: "820px",
      },
    },
  },
  plugins: [],
};
export default config;
