/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        manrope: ['Manrope', 'sans-serif']
       },
       spacing:{
         128: '32rem',
         100: '6.25rem',
       },
       colors:{
         'hero':'#fdca09',
         'body': '#101010',
         'metrics' : '#fec00a',
         'contact-image':'#fef1e0',
       },
       fontSize:{
         100: '6.25rem',
         34: '2.125rem',
         28: '1.75rem',
       },
       boxShadow:{
         '18': '0 0 18px 0 rgba(0, 0, 0, 0.10)',
       },
       lineHeight:{
         'slogan':'6.875rem'
       }
       
    },
  },
  plugins: [],
}
