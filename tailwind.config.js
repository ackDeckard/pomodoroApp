/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // #2E325A
        customBackground: "hsl(235, 35%, 18%)",
        // #F87070
        //red details
        redDetails: "hsl(0, 91%, 71%)",

        // #70F3F8
        // cyan details
        cyanDetails: "hsl(182,91%, 71%)",

        // #D881F8
        // pink details

        pinkDetails: "hsl(284, 89%, 74%)",
        // #161932
        // navbar color
        navBarBG: "hsl(234, 39%, 14%)",
        // #D7E0FF
        // clock and title color
        clockAndTitle: "hsl(226, 99%, 92%)",

        // #66C7F4
        shortBreak: "hsl(199, 86%, 67%)",
        // #7FB285
        longBreak: "hsl(127, 24%, 59%)",

        // initial gradient
        initialGradient: "hsl(235, 49%, 11%)",
        // final gradient
        finalGradient: "hsl(234, 33%, 17%)",

        // input background color
        inputBg: "hsl(229,52%, 96%)",
        // input text color
        inputColor: "hsl(235, 35%, 18%)",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["focus"],
      outline: ["focus"],
      ringWidth: ["focus"],
      boxShadow: ["focus"],
    },
  },
  plugins: [],
};
