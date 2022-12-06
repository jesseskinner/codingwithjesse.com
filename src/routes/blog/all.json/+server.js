import { getAllArticles } from '$lib/database.js';

export async function GET() {
	const article = await getAllArticles();

	if (article !== null) {
		throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
		// Suggestion (check for correctness before using):
		// return new Response(article.map((article) => ({
		// 	title: article.title,
		// 	slug: article.slug,
		// 	html: article.html,
		// 	category: article.category,
		// 	posted_at: article.posted_at
		// })));
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
