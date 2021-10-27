import { getAll, add, update, remove } from '$lib/model/posts.js';

export async function get() {
	return { body: await getAll(true) };
}

export async function post({ body }) {
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

	return {
		status: 303,
		headers: { Location: '/admin/' }
	};
}
