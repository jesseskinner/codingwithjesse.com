const express = require('express');
const app = express();
const postsModel = require('../model/posts');
const { getCategories } = require('../model/categories');
const cookie = require('cookie');
const axios = require('axios');

app.use(express.urlencoded({ extended: true }));

function handleRequest(response, promise) {
	promise
		.then(function () {
			// successful, redirect to admin index
			response.redirect('/admin/');
			response.send();
		})
		.catch(function (error) {
			response.send(error);
		});
}

app.use(async (req, res, next) => {
	const { auth } = cookie.parse(req.headers.cookie || '');

	if (await isAdmin(auth)) {
		next();
	} else {
		res.redirect('/user/login');
	}
});

app.get('/api/posts', async function (request, response) {
	try {
		const posts = await postsModel.getAll(true);

		response.send(posts);
	} catch (error) {
		console.error(error);
		response.send(error.message);
	}
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

async function isAdmin(token) {
	if (token) {
		try {
			const { data } = await axios.get(`${process.env.AUTH}check/${token}`);
	
			return !!data.email;
		} catch (e) {
			return false;
		}
	}

	return false;
}
