export async function load({ params, fetch }) {
	const res = await fetch(`/blog/page/${params.page}.json`);
	const posts = await res.json();

	return { posts, page: +params.page };
}
