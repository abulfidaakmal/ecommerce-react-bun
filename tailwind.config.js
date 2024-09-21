import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderColor: {
        primary: "#2C343E",
      },
    },
  },
  daisyui: {
    themes: ["sunset"],
  },
  plugins: [daisyui],
};
