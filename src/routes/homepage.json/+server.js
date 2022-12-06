import { json as json$1 } from '@sveltejs/kit';
import 'dotenv/config';
import { getRecentArticles } from '$lib/database.js';
import videos from '../../youtube.json';

export async function GET() {
	const posts = await getRecentArticles(6);

	return json$1({ posts, videos: videos.slice(0, 12) })
}
