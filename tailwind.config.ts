import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(16deg)" },
          "20%": { transform: "rotate(-6deg)" },
          "30%": { transform: "rotate(16deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(16deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 2.1s 0.6s infinite",
      },
      transformOrigin: {
        wave: "75% 75%",
      },
    },
    fontFamily: {
      mons: ["Montserrat", "sans-serif"],
      maison: ["Maison Neue Extended Extra Bold", "sans-serif"],
      mono: ["SFMonoRegular, monospace"],
    },
  },
  plugins: [],
};

export default config;
