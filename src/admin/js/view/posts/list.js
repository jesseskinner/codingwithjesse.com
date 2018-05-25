import { h, Component } from 'preact';
import postsStore from '../../model/posts';

export default class PostList extends Component {
	componentDidMount() {
		this._unsubscribe = postsStore.getState(posts =>
			this.setState({ posts })
		);
	}

	componentWillUnmount() {
		this._unsubscribe();
	}

	render() {
		const posts = (this.state && this.state.posts) || [];

		return (
			<div>
				<h1>Posts</h1>

				<table class="table">
					<tr>
						<th scope="col">Title</th>
						<th scope="col">Date</th>
					</tr>
					{posts.map(post => (
						<tr>
							<td>{post.title}</td>
							<td>{post.posted_at}</td>
							<td>
								<a href={'/admin/posts/edit/' + post.id}>
									Edit
								</a>
							</td>
						</tr>
					))}
				</table>
				<a href="/admin/posts/add">Add new post</a>
			</div>
		);
	}
}
