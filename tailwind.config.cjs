/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {		
		extend: {
			colors:{
				'aqblue': '#12619e',
				'aqlogo': '#205BA5',
				'aqgreen': '#a4C636',
				'aqsky': '#23a5d9'
			},
			fontFamily: {
				//sans: ["InterVariable", "Inter", ...defaultTheme.fontFamily.sans],
				serif: ["Montserrat", ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [],
}
