/** @type {import('tailwindcss').Config} */

const { screens } = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./utils/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			xs: '375px',
			...screens,
		},
		container: {
			center: true,
			padding: '1rem',
		},
		extend: {
			fontFamily: {
				primary: 'var(--poppins)',
				secondary: 'var(--source_sans_pro)',
			},
			colors: {
				primary: {
					100: '#8ECAE6',
					200: '#219EBC',
					300: '#023047',
				},
				secondary: {
					100: '#FFB703',
					200: '#FB8500',
				},
				dark: '#121212',
				light: '#EAEAEA',
			},
		},
	},
	plugins: [
		require('@headlessui/tailwindcss'),
		require('@tailwindcss/typography'),
	],
};
