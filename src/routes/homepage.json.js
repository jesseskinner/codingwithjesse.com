import { getRecentArticles } from './_database.js';

export async function get(req, res, next) {
	const articles = await getRecentArticles(5);

	if (articles !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(articles));
	} else {
		next();
	}
}
