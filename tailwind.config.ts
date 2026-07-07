import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Echoes the Android app's light theme (presentation/theme).
        parchment: '#FAF9F6',
        parchmentCard: '#FFFFFF',
        ink: '#1C1917',
        stone: '#78716C',
        hairline: '#E7E5E4',
        indigo: '#3730A3',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
