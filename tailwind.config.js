/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // xs: "320px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      colors: {
        light: {
          primary: 'hsl(0, 0%, 98%)',
          secondary: '#fff',
          text: 'hsl(200, 15%, 8%)',
        },
        dark: {
          primary: 'hsl(207, 26%, 17%)',
          secondary: 'hsl(209, 23%, 22%)',
          text: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },

  plugins: [],
};

