const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#005B96',
        secondary: '#00A6D6',
        background: '#F9F9F9',
        textDark: '#2C2C2C',
        textLight: '#6C6C6C',
        action: '#00A86B',
        accent: '#FFB400',
        footer: '#003B6F',
        hero: '#E6F3FA',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'var(--font-geist-sans)', 'sans-serif'],
      },
      borderRadius: {
        btn: '6px',
      },
    },
  },
  plugins: [],
};
export default config;
