/** @type {import('tailwindcss').Config} */
// Los colores apuntan a los tokens del sistema de diseño (src/styles/tokens.css),
// así el tema claro/oscuro se resuelve en CSS y no en cada clase.
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: ['"Playfair Display Variable"', '"Playfair Display"', 'Georgia', 'serif'],
				sans: ['"Figtree Variable"', '"Figtree"', '"Segoe UI"', 'system-ui', 'sans-serif'],
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
				container: '1200px',
				measure: '68ch',
			},
			borderRadius: {
				sm: '6px',
				md: '12px',
				lg: '20px',
			},
		},
	},
	plugins: [],
}
