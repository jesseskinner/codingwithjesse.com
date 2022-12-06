import { json } from '@sveltejs/kit';
import { getArticlesByMonth } from '$lib/database.js';

export async function GET({ params: { month, year } }) {
	const articles = await getArticlesByMonth(year, month);

	if (articles !== null && articles.length) {
		return json(articles);
	}
}
