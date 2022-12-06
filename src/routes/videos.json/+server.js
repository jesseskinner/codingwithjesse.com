import { json as json$1 } from '@sveltejs/kit';
import 'dotenv/config';
import videos from '../../youtube.json';

export async function GET() {
	return json$1({ videos });
}
