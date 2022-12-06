import { getCategories } from '$lib/model/categories.js';
import { json } from '@sveltejs/kit';

export async function GET() {
	// Suggestion (check for correctness before using):
	return json(await getCategories());
}
