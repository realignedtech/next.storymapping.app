/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.011em',
      },
      // Shared radius scale with windshift-website: a 4px control corner and a
      // 6px card corner. This is the Tailwind v3 equivalent of windshift's
      // `@theme` --radius-* tokens, so both sites use the same geometry.
      borderRadius: {
        none: '0',
        sm: '0.25rem',
        DEFAULT: '0.25rem',
        md: '0.25rem',
        lg: '0.25rem',
        xl: '0.375rem',
        '2xl': '0.375rem',
        '3xl': '0.375rem',
        full: '9999px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out',
      },
      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
