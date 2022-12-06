import { getRecentArticles } from '$lib/database.js';
import { Feed } from 'feed';

export const prerender = true;

export async function GET() {
	const articles = await getRecentArticles(10);

	return new Response(getRSS(articles), { headers: { 'Content-Type': 'application/rss+xml' } });
}

function getRSS(articles) {
	const feed = new Feed({
		title: 'Coding with Jesse',
		description:
			'JavaScript, CSS, HTML, and anything else of interest to standards-loving web designers and developers',
		id: 'https://codingwithjesse.com/',
		link: 'https://codingwithjesse.com/',
		language: 'en', // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
		// image: "http://example.com/image.png",
		// favicon: "http://example.com/favicon.ico",
		copyright: `Copyright ${new Date().getFullYear()}, Jesse Skinner`,
		updated: new Date(articles[0].posted_at), // optional, default = today
		generator: '', // optional, default = 'Feed for Node.js'
		// feedLinks: {
		//   json: "https://example.com/json",
		//   atom: "https://example.com/atom"
		// },
		author: {
			name: 'Jesse Skinner',
			email: 'jesse@codingwithjesse.com',
			link: 'https://codingwithjesse.com/'
		}
	});

	const footer = `<hr/><p>Interested in web development? <a href="https://www.codingwithjesse.com/newsletter">Subscribe to the Coding with Jesse newsletter!</a></p>`;

	articles.forEach((post) => {
		const url = `https://www.codingwithjesse.com/blog/${post.slug}/`;
		feed.addItem({
			title: post.title,
			id: url,
			link: url,
			content: `${post.html}${footer}`,
			date: new Date(post.posted_at)
			// image: post.image
		});
	});

	return feed.rss2();
}
