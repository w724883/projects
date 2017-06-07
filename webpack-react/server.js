"use strict";

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackConfig = require("./webpack.config");
webpackConfig.plugins.splice(webpackConfig.plugins.length-2,webpackConfig.plugins.length-1);
webpackConfig.plugins.push(new CopyWebpackPlugin([
  { from: './mock',to:'./mock' }
]));
webpackConfig.plugins.push(new Webpack.DefinePlugin({
  '__DEV__': true
}));

const compiler = Webpack(webpackConfig);
const server = new WebpackDevServer(compiler, {
	stats: {
		colors: true
	}
});

server.listen(8080, "127.0.0.1", function() {
	console.log("Starting server on http://localhost:8080");
});
