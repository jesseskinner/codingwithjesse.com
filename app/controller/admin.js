const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const postsModel = require('../model/posts');
const { getCategories } = require('../model/categories');

app.use(bodyParser.urlencoded({ extended: true }));

function handleRequest(response, promise) {
	promise
		.then(function() {
			// successful, redirect to admin index
			response.redirect('/admin/');
			response.send();
		})
		.catch(function(error) {
			response.send(error);
		});
}

app.get('/api/posts', async function(request, response) {
	try {
		const posts = await postsModel.getAll(true);

		response.send(posts);
	} catch (error) {
		console.error(error);
		response.send(error.message);
	}
});

// add post
app.post('/posts/add', function(request, response) {
	handleRequest(response, postsModel.add(request.body));
});

// edit post
app.post('/posts/edit/:id', function(request, response) {
	if (request.body.submit === 'delete') {
		handleRequest(response, postsModel.remove(request.params.id));
	} else {
		handleRequest(
			response,
			postsModel.update(request.params.id, request.body)
		);
	}
});

app.get('/categories', async (request, response) => {
	response.send(await getCategories());
});

module.exports = app;
