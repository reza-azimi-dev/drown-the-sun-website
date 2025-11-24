import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f20d33",
        "primary-dark": "#b90926",
        "background-light": "#f8f5f6",
        "background-dark": "#0a0a0a",
        "background-card": "#1c1c1c",
        "text-light": "#E0E0E0",
        "text-dark": "#1c1c1c",
        accent: "#6a040f",
      },
      fontFamily: {
        display: ["var(--font-sora)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [forms],
};

export default config;
