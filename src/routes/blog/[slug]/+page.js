export async function load({ params, fetch }) {
	const res = await fetch(`/api/article/${params.slug}.json`);

	if (res.status === 200) {
		const post = await res.json();

		return { post };
	}
}
