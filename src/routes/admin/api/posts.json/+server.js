import { getAll, add, update, remove } from '$lib/model/posts.js';
import { json } from '@sveltejs/kit';

export async function GET() {
	return json(await getAll(true));
}

export async function POST({ request }) {
	// body = body && body.entries ? Object.fromEntries(body.entries()) : body;
	const body = Object.fromEntries(await request.formData());
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
