import postsModel from '../../app/model/posts';

export async function getRecentArticles(count) {
	const posts = await postsModel.getRecent(count);
	return posts.map(getArticleFromPost);
}

export async function getArticle(slug) {
	const post = await postsModel.getBySlug(slug);
	return getArticleFromPost(post);
}

function getArticleFromPost(post) {
	return {
		...post,
		url: `/article/${post.slug}`,
		posted_at: post.posted_at.getTime() / 1000
	};
}
