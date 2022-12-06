import { json } from '@sveltejs/kit';
import { getArticlesByCategory } from '$lib/database.js';

export async function GET({ params: { category } }) {
	const articles = await getArticlesByCategory(category);

	if (articles !== null && articles.length) {
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
		// Suggestion (check for correctness before using):
		// return json(articles);
		return { body: articles };
	}
}
