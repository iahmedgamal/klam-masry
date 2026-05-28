/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          bg:           '#0b0806',
          card:         '#111009',
          'card-hover': '#161209',
          border:       '#2a2018',
          'border-hover': '#6a4e28',
        },
        gold: {
          dim:     '#3a2c18',
          muted:   '#4a3a28',
          DEFAULT: '#c9933a',
          light:   '#e8c87a',
        },
        cream: {
          muted:   '#6a5a40',
          DEFAULT: '#9a8870',
          bright:  '#ede3cd',
        },
      },
      letterSpacing: {
        widest2: '0.2em',
        widest3: '0.25em',
        widest4: '0.3em',
      },
    },
  },
  plugins: [],
}
