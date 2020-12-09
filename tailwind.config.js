module.exports = {
	purge: {
		// enabled: true,
		content: [
			//   './src/tailwind.css',
			'./src/app.js',
			'./src/components/**/*.js'
		]
	},
	verbose: true,
	debug: true,
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			backgroundColor: ['responsive', 'hover', 'focus', 'active']
		},
	},
	plugins: [],
}
