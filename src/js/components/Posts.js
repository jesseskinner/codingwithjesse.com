import { h } from 'preact';
import { Post } from '../components/Post';

export function Posts({ posts }) {
	return <ul id="main">{posts.map(post => <Post post={post} />)}</ul>;
}
