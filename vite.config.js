import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // tailwind.config.js

theme: {
  extend: {
    colors: {
      primary: "#020617", // Slate 950 (Deep Space Black)
      accent: "#8B5CF6",
    },
    animation: {
      'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      'shimmer': 'shimmer 2s linear infinite',
      'blob': 'blob 7s infinite',
    },
    keyframes: {
      'border-beam': {
        '100%': { 'offset-distance': '100%' },
      },
      'shimmer': {
        from: { backgroundPosition: '0 0' },
        to: { backgroundPosition: '-200% 0' },
      },
      'blob': {
        "0%": { transform: "translate(0px, 0px) scale(1)" },
        "33%": { transform: "translate(30px, -50px) scale(1.1)" },
        "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        "100%": { transform: "translate(0px, 0px) scale(1)" }
      }
    },
  },
},
})