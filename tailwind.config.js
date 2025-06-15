
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
// tailwind.config.js
module.exports = {
  darkMode: 'class', // ✅ This is crucial!
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
