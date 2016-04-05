import React from 'react';
import { Link } from 'react-router';
import postsStore from '../../model/posts';

export default class PostList extends React.Component {
	componentDidMount() {
		this._unsubscribe = postsStore.getState(posts => this.setState({ posts }));
	}

	componentWillUnmount() {
		this._unsubscribe();
	}

	render() {
		const posts = this.state && this.state.posts || [];

		return (
			<div>
				List page

				<table>
					<tr><th>Title</th><th>Date</th></tr>
					{
						posts.map(post => (
							<tr>
								<td>{post.title}</td>
								<td>{post.posted_at}</td>
								<td><Link to={"/admin/posts/edit/" + post.id}>Edit</Link></td>
							</tr>
						))
					}
				</table>

				<Link to="/admin/posts/add">Add new post</Link>
			</div>
		);
	}
};
