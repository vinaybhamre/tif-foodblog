/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E2368",
        secondary: "#E23744",
        body: "#444957",
      },
    },
  },
  plugins: [],
};
