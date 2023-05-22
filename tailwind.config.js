/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'oxygen-mono': ['Oxygen Mono', 'monospace'],
        'major-mono-display': ['Major Mono Display', 'monospace'],
      },
    },
  },
  plugins: [],
}

