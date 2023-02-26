export async function load({ params, fetch }) {
	const res = await fetch('/admin/api/posts.json');
	const posts = await res.json();
	const id = +params.id;
	const post = posts.find((post) => post.id === id);

	return { post };
}
