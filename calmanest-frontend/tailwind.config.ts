import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-blue': '#00053f', 
        'light-pink': '#FFB6C1',
        'md-yellow':'#f7c831',
        'light-green':'#6ba271',

      },
    },
  },
  plugins: [],
};

export default config;