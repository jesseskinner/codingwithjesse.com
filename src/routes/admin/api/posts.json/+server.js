import { getAll, add, update, remove } from '$lib/model/posts.js';

export async function GET() {
	throw new Error("@migration task: Migrate this return statement (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292701)");
	// Suggestion (check for correctness before using):
	// return new Response(await getAll(true));
	return { body: await getAll(true) };
}

export async function POST({ body }) {
	body = body && body.entries ? Object.fromEntries(body.entries()) : body;

	const { id } = body;

	if (id) {
		if (body.submit === 'delete') {
			await remove(id);
		} else {
			await update(id, body);
		}
	} else {
		await add(body);
	}

	return new Response(undefined, { status: 303, headers: { Location: '/admin/' } });
}
