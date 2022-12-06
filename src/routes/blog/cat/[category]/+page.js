export async function load({ params, fetch }) {
	const res = await fetch(`/blog/cat/${params.category}.json`);
	const posts = await res.json();

	return { posts, category: params.category };
}
