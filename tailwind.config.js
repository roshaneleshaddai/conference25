/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        swipeInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        swipeInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        bounce: "bounce 1.5s infinite",
        fadeIn: "fadeIn 0.5s ease-in-out",
        swipeInLeft: "swipeInLeft 1.0s ease-in-out",
        swipeInRight: "swipeInRight 1.0s ease-in-out",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"], // Customize the "sans" font family
      },
    },
  },
  plugins: [],
};
