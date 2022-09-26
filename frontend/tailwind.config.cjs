/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		},
		extend: {
			backgroundImage: {
				galaxyBg: "url('/galaxyBg.png')"
			}
		}
	},
	plugins: []
}
