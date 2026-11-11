/** @type {import('tailwindcss').Config} */
// Los colores apuntan a los tokens del sistema de diseño (src/styles/tokens.css),
// así se cambian en un solo sitio y no en cada clase. La web solo tiene tema claro
// (color-scheme: light en tokens.css).
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		// Los cortes de siempre de Tailwind (640, 768, 1024, 1280 y 1536 px) escritos en em, para que
		// sigan al tamaño de letra del navegador igual que los de src/styles/tailwind.css.
		screens: {
			sm: '40em',
			md: '48em',
			lg: '64em',
			xl: '80em',
			'2xl': '96em',
		},
		extend: {
			fontFamily: {
				display: ['"Brygada 1918 Variable"', '"Brygada 1918"', 'Georgia', 'serif'],
				sans: ['"Albert Sans Variable"', '"Albert Sans"', '"Segoe UI"', 'system-ui', 'sans-serif'],
			},
			colors: {
				surface: 'var(--surface)',
				raised: 'var(--surface-raised)',
				tint: 'var(--surface-tint)',
				aqua: 'var(--aqua)',
				'aqua-logo': 'var(--aqua-logo)',
				sand: 'var(--surface-sand)',
				night: 'var(--night)',
				'on-night': 'var(--on-night)',
				'on-night-muted': 'var(--on-night-muted)',
				line: 'var(--line)',
				'control-border': 'var(--control-border)',
				ink: 'var(--ink)',
				'ink-muted': 'var(--ink-muted)',
				brand: 'var(--brand)',
				'brand-strong': 'var(--brand-strong)',
				action: 'var(--action)',
				'on-action': 'var(--on-action)',
				danger: 'var(--danger)',
				success: 'var(--success)',
			},
			maxWidth: {
				container: '1240px',
				measure: 'var(--measure)',
			},
			borderRadius: {
				sm: '2px',
				md: '2px',
				lg: '0px',
			},
		},
	},
	plugins: [],
}
