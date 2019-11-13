import postsModel from '../../app/model/posts';

export async function getHomepageArticles() {
	const posts = await postsModel.getAll();
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
