import type { Config } from "tailwindcss";
const settingsScreens = require("./tailwind/settings.screens");
const settingsFontSizes = require("./tailwind/settings.fontsizes");

export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        lg: "1344px",
      },
    },
    extend: {
      fontFamily: {
        calendas: ["Calendas", "Helvetica", "Arial", "sans-serif"],
        montreal: [
          "PP Neue Montreal Regular",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        montrealBold: [
          "PP Neue Montreal Medium",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        // white: {
        // 	100: '#FFFFFF',
        // 	200: '#D9D9D9',
        // 	300: '#9E9E9E',
        // },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
