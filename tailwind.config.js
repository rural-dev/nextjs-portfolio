module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Prompt']
      },
      colors: {        
        'violet': '#A93DE9',
        'violet2': '#BE58FA',
        'basic': '#4F4058',
        'bg1': '#4F405810',
        'bg2': '#4F4058'      
      },
    },
  },
  plugins: [],
}
