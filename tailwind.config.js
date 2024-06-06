/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				comic: "'Comic Neue', cursive"
			},
			colors: {
				bg: '#fcfaf4',

				lightGreen: '#C9D990',
				lightPink: '#F682A5',
				lightViolet: '#C3B2E7',
				lightAmber: '#F9A474',

				darkGreen: '#1C471F',
				darkPink: '#52225E',
				darkViolet: '#52225E',
				darkAmber: '#5B2715'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
