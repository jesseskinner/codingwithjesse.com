export async function load({ fetch }) {
	const res = await fetch('/homepage.json');
	const posts = await res.json();

	return { posts };
}
