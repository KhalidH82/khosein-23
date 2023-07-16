/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "media",
  theme: {
    darkMode: "class",
    extend: {
      colors: {
        "ship-cove": {
          50: "#f2f6fb",
          100: "#e7eff8",
          200: "#d4e1f1",
          300: "#b9cce8",
          400: "#9db1dc",
          500: "#8497d0",
          600: "#707ec2",
          700: "#5a66a8",
          800: "#4b5588",
          900: "#41496e",
          950: "#262a40",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
