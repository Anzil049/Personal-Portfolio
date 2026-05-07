/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--text-primary)",
        secondary: "var(--text-secondary)",
        retro: {
          yellow: '#d9a42b',
          brown: '#2c1e11',
          beige: '#f5f5dc',
          accent: '#eab308',
          dark: '#1a140f',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto)', 'JetBrains Mono', 'monospace'],
        display: ['Playfair Display', 'serif'],
        pixel: ['Silkscreen', 'cursive'],
      },
      boxShadow: {
        'retro': '0 8px 0 0 rgba(44, 30, 17, 0.2)',
        'retro-lg': '0 12px 0 0 rgba(44, 30, 17, 0.3)',
      },
    },
  },
  plugins: [],
}
