/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        terminal: ['VT323', 'monospace'],
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        // Core retro palette
        dark: '#0a0d14',
        surface: '#0f1520',
        card: '#151c2c',
        panel: '#1a2236',
        // Neon accents
        neon: {
          green: '#00ff88',
          blue: '#00d4ff',
          purple: '#b14aff',
          yellow: '#ffe54c',
          pink: '#ff4488',
        },
        primary: '#00ff88',
        accent: '#00d4ff',
        purple: '#b14aff',
        yellow: '#ffe54c',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'float': 'float 3s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'pixel-glow': 'pixelGlow 2s ease-in-out infinite alternate',
        'march': 'march 0.4s steps(1) infinite',
        'particle': 'particle 6s linear infinite',
        'glitch': 'glitch 3s infinite',
        'type': 'typing 3.5s steps(40, end) forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        pixelGlow: {
          '0%': { filter: 'drop-shadow(0 0 4px #00ff88)' },
          '100%': { filter: 'drop-shadow(0 0 12px #00ff88) drop-shadow(0 0 24px #00ff8844)' },
        },
        march: {
          '0%': { borderColor: '#00ff88 transparent transparent transparent' },
          '25%': { borderColor: 'transparent #00d4ff transparent transparent' },
          '50%': { borderColor: 'transparent transparent #b14aff transparent' },
          '75%': { borderColor: 'transparent transparent transparent #ffe54c' },
        },
        particle: {
          '0%': { transform: 'translateY(100vh) translateX(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(-20px) translateX(40px)', opacity: '0' },
        },
        glitch: {
          '0%, 90%, 100%': { transform: 'translate(0)' },
          '92%': { transform: 'translate(-2px, 1px)' },
          '94%': { transform: 'translate(2px, -1px)' },
          '96%': { transform: 'translate(-1px, 2px)' },
          '98%': { transform: 'translate(1px, -2px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'neon-green': '0 0 12px #00ff8866, 0 0 24px #00ff8833',
        'neon-blue': '0 0 12px #00d4ff66, 0 0 24px #00d4ff33',
        'neon-purple': '0 0 12px #b14aff66, 0 0 24px #b14aff33',
        'neon-yellow': '0 0 12px #ffe54c66, 0 0 24px #ffe54c33',
        'pixel': '4px 4px 0px #00ff8833',
        'pixel-hover': '6px 6px 0px #00ff8855',
      },
    },
  },
  plugins: [],
}
