import type { Config } from 'tailwindcss'

export default {
	content: ['./index.html', './src/frontend/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwindcss-animate'),
		require('daisyui'),
	],
	daisyui: {
		themes: true,
	},
} satisfies Config
