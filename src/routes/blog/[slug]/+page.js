export async function load({ page, fetch }) {
	const res = await fetch(`/api/article/${page.params.slug}.json`);

	if (res.status === 200) {
		const post = await res.json();

		return { post };
	}
}
