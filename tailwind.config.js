/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0c0e19",
        light: "#f9f9f9",
      },
    },
  },
  plugins: [],
};
