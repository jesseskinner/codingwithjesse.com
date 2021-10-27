import { getArticle } from '$lib/database.js';

export async function get({ params: { slug } }) {
	const article = await getArticle(slug);

	if (article) {
		return { body: article };
	}
}
