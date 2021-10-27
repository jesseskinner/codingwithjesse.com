import { getRecentArticles } from '$lib/database.js';

export async function get({ params: { page } }) {
	const articles = await getRecentArticles(5, page);

	if (articles !== null && articles.length) {
		return { body: articles };
	}
}
