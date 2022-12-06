export async function load({ page, fetch }) {
	const res = await fetch(`/blog/cat/${page.params.category}.json`);
	const posts = await res.json();

	return { posts, category: page.params.category };
}
