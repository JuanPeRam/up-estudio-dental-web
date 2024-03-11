/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
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
				contrast: '#2d2d2d',
				corporative: '#77c6c1'

			}
		},
	},
	plugins: [animations],
}
