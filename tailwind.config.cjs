/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'sans': ['Okta Neue', ...defaultTheme.fontFamily.sans]
			},
			dropShadow: {
				'primary':  '4px 4px 0 rgba(0, 0, 0, 1)'
			}
		},
		colors: {
			primary: {
				100: '#F38A82',
				200: '#ED7A71',
				300: '#F93F31',
				400: '#B6342A',
			},
			secondary: {
				100: '#8BB9D2',
				200: '#75A0B9',
				300: '#6EB1D8',
				400: '#3E6980',
			},
			snow: {
				100: '#ECE4DE',
				200: '#DBD6D2',
				300: '#9B9691',
				400: '#6A6969',
			}
 		}
	},
	plugins: [],
}
