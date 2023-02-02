/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Ralewey: ['Raleway', 'sans-serif']
			},
			maxWidth: {
				container: '1477px',
				footerContainer: '1186.67px'
			},
			colors: {
				primary: '#5D534A',
				white: '#FFFFFF',
				red: '#FF5555',
				pink: '#F0CAC5',
				orange: '#EFBFA4',
				softblue: '#D3E0DC',
				green: '#CFDAC8'
			}
		},
		corePlugins: {
			preflight: false
		}
	},

	plugins: []
};
