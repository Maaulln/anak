/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
      primary: '#FF9149',      // tombol masuk
      secondary: '#F4F4F4',    // background input
      grayLabel: '#9E9E9E',    // placeholder & teks label
      linkBlue: '#007BFF',     // lupa password
      darkGray: '#2D2D2D',     // tombol google
      grayPlaceholder: '#BDBDBD', // placeholder input
      },
      borderRadius: {
        lg: '12px',              // untuk input dan tombol
      },
      spacing: {
        '4.5': '1.125rem', // 18px
        '7.5': '1.875rem', // 30px
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}