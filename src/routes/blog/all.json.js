import { getAllArticles } from '$lib/database.js';

export async function get() {
	const article = await getAllArticles();

	if (article !== null) {
		return {
			body: article.map((article) => ({
				title: article.title,
				slug: article.slug,
				html: article.html,
				category: article.category,
				posted_at: article.posted_at
			}))
		};
	}
}
