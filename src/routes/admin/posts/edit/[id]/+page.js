export async function load({ page, fetch }) {
	const res = await fetch('/admin/api/posts.json');
	const posts = await res.json();
	const id = +page.params.id;
	const post = posts.find((post) => post.id === id);

	return { post };
}
