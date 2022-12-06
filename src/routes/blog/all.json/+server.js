import { getAllArticles } from '$lib/database.js';
import { json } from '@sveltejs/kit';

export async function GET() {
	const article = await getAllArticles();

	if (article !== null) {
		return json(
			article.map((article) => ({
				title: article.title,
				slug: article.slug,
				html: article.html,
				category: article.category,
				posted_at: article.posted_at
			}))
		);
	}
}
