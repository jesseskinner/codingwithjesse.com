import { json } from '@sveltejs/kit';
import { getRecentArticles } from '$lib/database.js';

export async function GET({ params: { page } }) {
	const articles = await getRecentArticles(5, page);

	if (articles !== null && articles.length) {
		return json(articles);
	}

	return json([]);
}
