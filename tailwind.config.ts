import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { teal: { deep: "#12332E", mid: "#B4532F" }, mint: "#F3EBDD", soft: "#FAF6EE", ink: "#1D2B28", muted: "#5B6862", line: "#E3D9C6", sky: "#E9DCC7", sage: "#8FA68E" },
    fontFamily: { serif: ["Georgia", "Cambria", "'Times New Roman'", "serif"], sans: ["system-ui", "-apple-system", "'Segoe UI'", "Roboto", "sans-serif"] },
    boxShadow: { card: "0 1px 2px rgba(35,51,58,.05), 0 6px 20px rgba(35,51,58,.06)" },
  } },
  plugins: [],
};
export default config;
