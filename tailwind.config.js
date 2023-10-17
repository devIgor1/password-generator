/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "retrowave-bg": "url('/src/wallpaperflare.com_wallpaper (1).jpg')",
      },
      fontFamily: {
        retro: ["Retro", "cursive"],
      },
    },
  },
  plugins: [],
}
