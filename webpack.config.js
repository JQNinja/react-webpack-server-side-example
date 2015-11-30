var path = require("path");
var assetsPath = path.join(__dirname, "public", "assets");
var publicPath = "assets/";

module.exports = [
	{
		name: "server-side rendering",
		entry: "./server/page.js",
		output: {
			path: assetsPath,
			filename: "../../server/page.generated.js",
			publicPath: publicPath,
			libraryTarget: "commonjs2"
		},
		resolve: {
    		extensions: ['', '.jsx', '.js']
		},
		externals: /^[a-z\-0-9]+$/,
		module: {
			loaders:[
				{ test: /\.jsx?$/, loader: "babel-loader", query: { presets: ['react', 'es2015'] } },
				{ test: /\.jpe?g$|\.png$|\.gif$/, loader: "file-loader" }
			]

		}
	}
];