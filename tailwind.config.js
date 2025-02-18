/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				special: "var(--special-font)",
				standard: "var(--standard-font)",
			},
			spacing: {
				"150p": "150%", // 150% del ancho
				"170vh": "170vh", // 170% de la altura de la ventana
			},
			blur: {
				"50px": "50px", // Desenfoque de 50px
			},
			boxShadow: {
				'custom': '0px 0px 9px 1px #0005', // Tu sombra personalizada
				'special': 'inset 0 2px 2px 0px rgba(255, 255, 255, 0.2)',
				'technologies': 'inset 0 2px 2px 0px rgba(255, 255, 255, 0.2), 0 0px 15px rgba(0, 0, 0, 0.3)',
			},
		},
	},
	plugins: [],
};
