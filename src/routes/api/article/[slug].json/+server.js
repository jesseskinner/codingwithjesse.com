import { json } from '@sveltejs/kit';
import { getArticle } from '$lib/database.js';

export async function GET({ params: { slug } }) {
	const article = await getArticle(slug);

	if (article) {
		return json(article);
	}

	throw 'Article not found';
}
