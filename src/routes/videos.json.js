import 'dotenv/config';
import videos from '../youtube.json';

export async function get() {
	return { body: { videos } };
}
