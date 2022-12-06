import { json } from '@sveltejs/kit';
import { getArticle } from '$lib/database.js';

export async function GET({ params: { slug } }) {
	const article = await getArticle(slug);

	if (article) {
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
		// Suggestion (check for correctness before using):
		// return json(article);
		return { body: article };
	}
}
