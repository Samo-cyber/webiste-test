import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: "#1A237E",
          2: "#3949AB",
        },
        accent: "#FFC400",
        secondary: {
          1: "#FFFFFF",
          2: "#E8EAF6",
          3: "#C5CAE9",
        },
      },
      fontFamily: {
        title: ["var(--font-cairo)", "sans-serif"],
        body: ["var(--font-cairo)", "sans-serif"],
        english: ["var(--font-poppins)", "sans-serif"],
      },
      spacing: {
        'margins': '60px',
        'padding': '50px',
        'gutter': '40px',
        'section': '70px',
      },
      borderRadius: {
        'card': '14px',
        'btn': '12px',
      },
      boxShadow: {
        'btn': '0 6px 18px rgba(26,35,126,0.08)',
        'card': '0 8px 24px rgba(26,35,126,0.06)',
      }
    },
  },
  plugins: [],
};
export default config;