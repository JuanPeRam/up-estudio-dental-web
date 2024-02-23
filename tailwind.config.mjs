/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Libre Baskerville"]
			},
			colors: {
				primary: '#fff',
				secondary: '#121212',
				contrast: '#4d4d4d'

			}
		},
	},
	plugins: [],
}
