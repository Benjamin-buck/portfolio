import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["var(--font-lexend)"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: '#2AA8FB'
      },
    },
  },
  plugins: [],
};
export default config;
