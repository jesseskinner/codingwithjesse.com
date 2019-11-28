import { getArticlesByMonth } from '../../_database.js';

export async function get(req, res, next) {
	const articles = await getArticlesByMonth(
		req.params.year,
		req.params.month
	);

	if (articles !== null && articles.length) {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(articles));
	} else {
		next();
	}
}
