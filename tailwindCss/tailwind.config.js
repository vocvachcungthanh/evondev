module.exports = {
  mode: "jit",
  purge: [
    './**/*.html',
    './**/*.{js,jsx,tsx,vue'
  ],
  content: [],
  theme: {
    extend: {
      spacing: {
        '35': '35px'
      },
      colors: {
        "gray-333": "#333"
      }
    },
  },
  plugins: [],
}
