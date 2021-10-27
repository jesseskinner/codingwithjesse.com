import { getArticlesByMonth } from '$lib/database.js';

export async function get({ params: { month, year } }) {
	const articles = await getArticlesByMonth(year, month);

	if (articles !== null && articles.length) {
		return { body: articles };
	}
}
