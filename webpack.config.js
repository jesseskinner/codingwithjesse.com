var webpack = require('webpack');

module.exports = {
	mode: 'development',
	devtool: 'eval-source-map',

	context: __dirname + '/src',
	entry: {
		admin: ['babel-polyfill', './admin/js/index.js'],
		blog: ['babel-polyfill', './js/index.js']
	},
	output: {
		publicPath: 'http://localhost:8080/',
		path: __dirname + '/build',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},

			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},

			{
				test: /\.(woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		})
	],
	devServer: {
		contentBase: 'build/',
		headers: { 'Access-Control-Allow-Origin': '*' }
	}
};
