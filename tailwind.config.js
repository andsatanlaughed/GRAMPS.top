/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        // Display serif — shared DNA with andsatanlaughed.com + danbarton.me
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Body sans
        sans: ['Inter', 'system-ui', 'sans-serif'],
        // The GUS voice — GRAMPS Unique Style. It leads here.
        script: ['Caveat', 'cursive'],
      },
      colors: {
        // Same family as danbarton.me, but gold leads and red supports —
        // the porch-light face of the network.
        ink: {
          DEFAULT: '#211c18',
          soft: '#3a322b',
          muted: '#6b5f53',
        },
        paper: {
          DEFAULT: '#fbf8f1',
          deep: '#f3ebdc',
          shade: '#e8ddc9',
        },
        brand: {
          gold: '#b8891f',      // decorative + display-size text only
          'gold-deep': '#8c6512', // small text + buttons (AA on paper)
          'gold-dark': '#6e4f0d', // button hover
          'gold-light': '#e0c068',
          red: '#c0282d',
          'red-deep': '#8f1c20',
        },
      },
      maxWidth: {
        prose: '46rem',
      },
      boxShadow: {
        photo: '0 18px 40px -20px rgba(33, 28, 24, 0.55)',
        card: '0 12px 30px -18px rgba(33, 28, 24, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
