import postsModel, { getComments } from '../../app/model/posts';

export async function getRecentArticles(count) {
	const posts = await postsModel.getRecent(count);
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
		...post,
		url: `/article/${post.slug}`,
		posted_at: post.posted_at.getTime() / 1000
	};
}
