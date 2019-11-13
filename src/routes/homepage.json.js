import { getHomepageArticles } from './_database.js';

export async function get(req, res, next) {
	const articles = await getHomepageArticles();

	if (articles !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(articles));
	} else {
		next();
	}
}
