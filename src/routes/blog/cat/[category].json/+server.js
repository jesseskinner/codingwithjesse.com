import { json } from '@sveltejs/kit';
import { getArticlesByCategory } from '$lib/database.js';

export async function GET({ params: { category } }) {
	const articles = await getArticlesByCategory(category);

	if (articles !== null && articles.length) {
		return json(articles);
	}
}
