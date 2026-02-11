import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          500: '#1570ef',
          600: '#1055d0',
          900: '#0d1e45'
        },
        accent: '#14b8a6'
      },
      boxShadow: {
        soft: '0 10px 35px rgba(16, 85, 208, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
