import React from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

export default class PostList extends React.Component {
	componentDidMount() {
		// load posts via ajax
		$.get('/admin/api/posts', posts => this.setState({ posts }));
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
							</tr>
						))
					}
				</table>

				<Link to="/admin/posts/add">Add new post</Link>
			</div>
		);
	}
};
