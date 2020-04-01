import 'dotenv/config';
import { getRecentArticles } from './_database.js';
import videos from '../youtube-recent.json';

export async function get(req, res, next) {
	const posts = await getRecentArticles(6);

	res.setHeader('Content-Type', 'application/json');
	res.end(JSON.stringify({ posts, videos }));
}
