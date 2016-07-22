var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

var plugins = [HtmlWebpackPluginConfig];

if(process.env.NODE_ENV === 'production') {
	plugins.push(new webpack.DefinePlugin({
		'process.env':{
			'NODE_ENV': JSON.stringify('production')
		}
	}));

	plugins.push(new webpack.optimize.UglifyJsPlugin({
		compress:{
			warnings: true
		}
	}));
}

module.exports = {
	entry: [
		'./app/index.js'
	],
	output: {
		path: __dirname + "/dist",
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/, 
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	resolve: {
		root: __dirname + "/app",
		extensions: ['', '.js']
	},
    plugins: plugins
}