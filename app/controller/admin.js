var express = require('express');
var app = express();
var path = require('path');
var postsModel = require('../model/posts');

function handleRequest(response, promise) {
	promise.then(function () {
		// successful, redirect to admin index
		response.redirect('/admin/');
		response.send();
	})
	.catch(function (error) {
		response.send(error);
	});
}

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
app.post('/posts/add', function (request, response) {
	handleRequest(response, postsModel.add(request.body));
});

// edit post
app.post('/posts/edit/:id', function (request, response) {
	if (request.body.submit === 'delete') {
		handleRequest(response, postsModel.remove(request.params.id));
	} else {
		handleRequest(response, postsModel.update(request.params.id, request.body));
	}
});

app.get('*', function (request, response){
	response.sendFile(path.resolve(
		__dirname, '..', '..', 'src', 'admin', 'index.html'
	));
});

module.exports = app;
