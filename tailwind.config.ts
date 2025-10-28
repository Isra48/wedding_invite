import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2rem", xl: "2.5rem" },
    },
    extend: {
      maxWidth: { "content-narrow": "960px", "content-wide": "1200px" },
      spacing: { 15: "3.75rem", 22: "5.5rem", 26: "6.5rem" },
      colors: { primary: "#1f2937", secondary: "#334155", accent: "#9ca3af", gold: "#C9A227", rose: "#F3D1D8" },
      fontFamily: {
         display: ["var(--font-display)"],
          body: ["var(--font-body)"],
        dancing: ['"Dancing Script"', 'cursive'] },
      keyframes: {
        shimmer: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100%)" } },
        fadeUp: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: { shimmer: "shimmer 1.2s linear infinite", fadeUp: "fadeUp 700ms ease-out both" },
      borderRadius: { "2xl": "1rem", "3xl": "1.5rem" },
    },
  },
  plugins: [],
};
export default config;
