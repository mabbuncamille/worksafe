import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        theme: {
          primary: '#F5F5F5',
        },
        primary: '#7030A0',
        'primary-light': '#8A55B1',
      },
    },
    fontFamily: {
      robotoFlex: ['var(--font-roboto-flex)'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
