import { getCategories } from '$lib/model/categories.js';

export async function get() {
	return {
		body: await getCategories()
	};
}
