const express = require('express');
const app = express();
const postsModel = require('../model/posts');

app.get('/homepage', async (request, response) => {
    try {
        const posts = await postsModel.getAll();
        const datesAsTimestamps = posts.map(post =>
            ({
                ...post,
                posted_at: post.posted_at.getTime() / 1000
            })
        );

        response.send(datesAsTimestamps);
    } catch (error) {
        response.send(error);
    }
});

module.exports = app;
