import { getCategories } from '$lib/model/categories.js';

export async function GET() {
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
	// Suggestion (check for correctness before using):
	// return new Response(await getCategories());
	return {
		body: await getCategories()
	};
}
