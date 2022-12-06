export async function load({ fetch }) {
	return {
		posts: await (await fetch(`/blog/all.json`)).json()
	};
}
