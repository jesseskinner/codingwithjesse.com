export async function load({ page, fetch }) {
	const res = await fetch(`/blog/page/${page.params.page}.json`);
	const posts = await res.json();

	return { posts, page: +page.params.page };
}
