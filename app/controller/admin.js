var express = require('express');
var app = express();
var path = require('path');
var postsModel = require('../model/posts');

app.get('/api/posts', function (request, response) {
	postsModel.getAll()
		.then(function (posts) {
			response.send(posts);
		})
		.catch(function (error) {
			response.send(error);
		});
});

// add post
app.post('/api/posts', function (request, response) {
	postsModel.add(request.params)
		.then(function (id) {
			response.send(id);
		})
		.catch(function (error) {
			response.send(error);
		});
});

app.get('*', function (request, response){
	response.sendFile(path.resolve(
		__dirname, '..', '..', 'src', 'admin', 'index.html'
	));
});

module.exports = app;
