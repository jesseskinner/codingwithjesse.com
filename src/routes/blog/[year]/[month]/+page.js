import { months } from '../../../_date.js';

export async function load({ params, fetch }) {
	const res = await fetch(`/blog/${params.year}/${params.month}.json`);
	const posts = await res.json();

	return {
		posts,
		month: `${months[params.month - 1]}, ${params.year}`
	};
}
