var fs = require('fs');
var path = require("path");

module.exports = {
	entry: [
	__dirname + '/app/index.js'
	]
	,
	output:{
		path: path.resolve(__dirname + "/built"),
		filename: 'built.js'
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
	devServer: {
        contentBase: "./build",
    }
	// devServer: {
	// 	port: 8000
	// }
}

