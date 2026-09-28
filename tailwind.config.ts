import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#0B0F14",
        card: "#111820",
        ink: "#F3F4F6",
        muted: "#9CA3AF",
        line: "#1F2937",
        accent: { DEFAULT: "#D97B6C", dark: "#8C3B32" },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
