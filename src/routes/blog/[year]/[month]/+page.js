import { months } from '../../../_date.js';

export async function load({ page, fetch }) {
	const res = await fetch(`/blog/${page.params.year}/${page.params.month}.json`);
	const posts = await res.json();

	return {
		posts,
		month: `${months[page.params.month - 1]}, ${page.params.year}`
	};
}
