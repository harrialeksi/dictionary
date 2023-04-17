/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "customBlack-800": "hsl(0, 0%, 2%)",
        "customBlack-600": "hsl(0, 0%, 12%)",
        "customBlack-400": "hsl(0, 0%, 18%)",
        "customBlack-200": "hsl(0, 0%, 23%)",
        "customGray-800": "hsl(0, 0%, 51%)",
        "customGray-600": "hsl(0,0%,91%)",
        "customGray-400": "hsl(0,0%,96%%",
        "customGray-200": "hsl(0,0%,100%)",
        "customPink-600": "hsl(274, 82%, 60%)",
        "customPink-400": "hsl(274, 82%, 80%)",
        "customPink-200": "hsl(274, 82%, 96%)",
        customRed: "hsl(0,100%, 66%)",
      },
    },
  },
  plugins: [],
};
