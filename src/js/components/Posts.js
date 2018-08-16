import { h } from 'preact';
import { Post } from './Post';

export function Posts({ posts }) {
	return (
		<ul id="main">
			{posts.map(post => (
				<Post post={post} />
			))}
		</ul>
	);
}
