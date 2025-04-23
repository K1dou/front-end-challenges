module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontSize: {
        fluid: 'clamp(1rem, 2vw, 2rem)',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        green: {
          500: 'hsl(158, 36%, 37%)',
          700: 'hsl(158, 42%, 18%)',
        },
        black: 'hsl(212, 21%, 14%)',
        gray: 'hsl(228, 12%, 48%)',
        cream: 'hsl(30, 38%, 92%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
