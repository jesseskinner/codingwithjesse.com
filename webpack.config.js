var webpack = require('webpack');

module.exports = {
	context: __dirname + '/src',
    entry: "./admin/js/index.js",
    output: {
        path: __dirname + '/build/admin',
        filename: "admin.bundle.js"
    },
    module: {
        loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},

            { test: /\.css$/, loader: "style!css" },

            { test: /\.(woff|woff2|eot|ttf|svg)$/, loader: 'url' }
        ]
    },
    plugins: [
	    new webpack.DefinePlugin({
	      "process.env": {
	        NODE_ENV: JSON.stringify("production")
	      }
	    })
    ]
};
