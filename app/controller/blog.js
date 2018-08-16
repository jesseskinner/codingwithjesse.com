const express = require('express');
const app = express();
const postsModel = require('../model/posts');

app.get('/homepage', async (request, response) => {
	try {
		const posts = await postsModel.getAll();
		const articles = posts.map(getArticleFromPost);

		response.send(articles);
	} catch (error) {
		response.send(error);
	}
});

app.get('/article', async (request, response) => {
	try {
        const slug = request.query.slug;
        
        if (!slug) {
            throw new Error('slug is required');
        }

		const post = await postsModel.getBySlug(slug);

		const article = getArticleFromPost(post);

		response.send(article);
	} catch (error) {
		response.send(error);
	}
});

function getArticleFromPost(post) {
	return {
		...post,
		url: `/article/${post.slug}`,
		posted_at: post.posted_at.getTime() / 1000
	};
}

module.exports = app;
