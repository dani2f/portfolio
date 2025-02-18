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
		},
	},
	plugins: [],
};
