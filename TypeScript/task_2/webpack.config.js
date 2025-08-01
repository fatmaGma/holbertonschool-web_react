const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: "./js/main.ts",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true
				}
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	},
	devServer: {
		static: "./dist",
		open: true,
	},
	plugins: [
		new ForkTsCheckerWebpackPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: "Development",
			template: "index.html",
			inject: true
		})
	],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	}
};
