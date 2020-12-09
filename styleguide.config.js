const { join } = require('path');

console.log('STYLEGUIDIST CONFIG FILE LAODED!');

module.exports = {
	ignore: ['**/*.styles.js'],
	verbose: true,
	require: [
		join(__dirname, 'src/tailwind.css')
	],
	// logger: {
	// 	debug: message => console.log(message),
	// 	info: message => console.info(message),
	// 	warn: message => console.warn(message)
	// },
	webpackConfig: {
		module: {
			rules: [
				// Babel loader will use your project’s babel.config.js
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				// Other loaders that are needed for your components
				{
					test: /\.css$/,
					use: ['style-loader', 'css-loader']
				}
			]
		}
	}
}
