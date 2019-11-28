import postsModel, {
	getAll,
	getComments,
	getByCategory,
	getByMonth,
} from '../../app/model/posts';

export async function getRecentArticles(count, page) {
	const posts = await postsModel.getRecent(count, page);
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
	const post = await postsModel.getBySlug(slug);
	const article = getArticleFromPost(post);

	article.comments = await getComments(post.id);

	return article;
}

function getArticleFromPost(post) {
	return {
		title: post.title,
		html: post.html,
		slug: post.slug,
		display: post.display,
		category: post.category,
		url: `/article/${post.slug}`,
		posted_at: post.posted_at.getTime(),
	};
}
