import { h } from 'preact';

const shortMonths = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];

export function Post({ post }) {
	const date = new Date(post.posted_at * 1000);
	const dateString = [
		shortMonths[date.getMonth()],
		date.getDay(),
		date.getFullYear()
	].join(' ');

	return (
		<li>
			<h1>
				<a href={`/blog/${post.slug}`}>{post.title}</a>
			</h1>{' '}
			<span class="date">{dateString}</span>
			<div class="section">{post.body}</div>
		</li>
	);
}
