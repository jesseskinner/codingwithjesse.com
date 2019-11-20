import { getAllArticles } from '../_database.js';

export async function get(req, res, next) {
	const article = await getAllArticles();

	if (article !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(article));
	} else {
		next();
	}
}
