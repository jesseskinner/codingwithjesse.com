import 'dotenv/config';
import { getRecentArticles } from '$lib/database.js';
import videos from '../youtube.json';

export async function get() {
	const posts = await getRecentArticles(6);

	return {
		body: { posts, videos: videos.slice(0, 12) }
	}
}
