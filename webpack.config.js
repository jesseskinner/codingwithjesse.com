module.exports = {
	context: __dirname + '/src',
    entry: "./admin/js/index.js",
    output: {
        path: __dirname + '/build/admin',
        filename: "admin.bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
