export async function load({ fetch }) {
	const res = await fetch('/admin/api/posts.json');
	const posts = await res.json();

	return { posts };
}
