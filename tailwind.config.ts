import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '300': '300px',
      },
      colors: {
        red: '#E01922',
        rightGray: '#999',
        drakGray: '#4F4F55',
        black: '#000',
        white: '#fff',
      },
      fontSize: {
        '1.5rem': [
          '1.5rem',
          {
            lineHeight: '1',
            fontWeight: 'bold',
          },
        ],
        '0.8rem': [
          '0.8rem',
          {
            fontWeight: '400',
            letterSpacing: '-0.3px',
          },
        ],
        '1.2rem': [
          '1.2rem',
          {
            fontWeight: 'bold',
            letterSpacing: '-0.3px',
          },
        ],
        '0.7rem': [
          '0.7rem',
          {
            letterSpacing: '-0.3px',
          },
        ],
      },
      flex: {
        '2': '0 0 calc(100% / 2 - 0.5rem)',
        '2.5': '0 0 calc(100% / 2 - 2rem)',
        '4': '0 0 calc(100% / 4)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
