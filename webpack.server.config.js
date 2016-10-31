var path = require("path");
var nodeExternals = require('webpack-node-externals');

module.exports = {
	target: 'node',
	externals: [nodeExternals()],
	entry: [
	__dirname + '/app/server.js'
	]
	,
	output:{
		path: path.resolve(__dirname + "/built"),
		publicPath: path.resolve(__dirname),
		filename: 'server.js'
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel', //use to load ES2015 files
				query:{
					presets: ['react','es2015']
				}

			}
		]
	},
	// devServer: {
	// 	port: 8000
	// }
}

