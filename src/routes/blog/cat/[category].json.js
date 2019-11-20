import { getArticlesByCategory } from '../../_database.js';

export async function get(req, res, next) {
	const articles = await getArticlesByCategory(req.params.category);

	if (articles !== null) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(articles));
	} else {
		next();
	}
}
