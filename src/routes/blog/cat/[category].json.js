import { getArticlesByCategory } from '$lib/database.js';

export async function get({ params: { category } }) {
	const articles = await getArticlesByCategory(category);

	if (articles !== null && articles.length) {
		return { body: articles };
	}
}
