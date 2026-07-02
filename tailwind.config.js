/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ng-dark': '#0a1f0f',
        'ng-card': '#102918',
        'ng-border': '#1e4d2a',
        'ng-accent': '#0BDA51',
        'ng-cyan': '#4ade80',
        'ng-text': '#7dc99a',
        // Theme-aware page chrome (background + text sitting directly on it).
        // Cards keep the fixed colors above in both themes — only these move.
        'ng-page': 'rgb(var(--ng-page-rgb) / <alpha-value>)',
        'ng-page-text': 'rgb(var(--ng-page-text-rgb) / <alpha-value>)',
        'ng-page-muted': 'rgb(var(--ng-page-muted-rgb) / <alpha-value>)',
        'ng-footer': 'rgb(var(--ng-footer-rgb) / <alpha-value>)',
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
