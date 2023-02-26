import {
	getAll,
	getComments,
	getByCategory,
	getByMonth,
	getRecent,
	getBySlug
} from '$lib/model/posts.js';

export async function getRecentArticles(count, page) {
	const posts = await getRecent(count, page);
	return posts.map(getArticleFromPost);
}

export async function getArticlesByCategory(category) {
	const posts = await getByCategory(category);
	return posts.map(getArticleFromPost);
}

export async function getArticlesByMonth(year, month) {
	const posts = await getByMonth(year, month);
	return posts.map(getArticleFromPost);
}

export async function getAllArticles() {
	const posts = await getAll();
	return posts.map(getArticleFromPost);
}

export async function getArticle(slug) {
	const post = await getBySlug(slug);

	if (post) {
		const article = getArticleFromPost(post);

		article.comments = await getComments(post.id);

		return article;
	}
}

function getArticleFromPost(post) {
	return {
		title: post.title,
		html: post.html,
		description:
			post.markdown
				?.split('\n')
				.map((n) => n.trim().replace(/[\[\]]|\([^)]+\)/g, ''))
				.filter((n) => n && !n.startsWith('<'))
				.shift() || '',
		slug: post.slug,
		display: post.display,
		category: post.category,
		posted_at: post.posted_at.getTime()
	};
}
