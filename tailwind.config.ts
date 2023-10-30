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
        mainTitle: [
          '1.5rem',
          {
            lineHeight: '1',
            fontWeight: 'bold',
          },
        ],
        productName: [
          '0.8rem',
          {
            fontWeight: '400',
            lineHeight: '1.2',
            letterSpacing: '-0.3px',
          },
        ],
        price: [
          '0.8rem',
          {
            fontWeight: '400',
            letterSpacing: '-0.3px',
          },
        ],
        salePrice: [
          '1.1rem',
          {
            fontWeight: 'bold',
            letterSpacing: '-0.3px',
          },
        ],
      },
      flex: {
        '2': '0 0 calc(100% / 2 - 2rem)',
      },
    },
  },
  plugins: [],
};
export default config;
