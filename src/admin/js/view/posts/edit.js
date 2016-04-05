import React from 'react';
import { Link } from 'react-router';
import postsStore from '../../model/posts';

export default class PostEdit extends React.Component {
	componentDidMount() {
		const id = +this.props.params.id;

		this._unsubscribe = postsStore.getState((posts) => {
			if (posts) {
				const post = posts.filter(post => post.id === id)[0];

				this.setState({ post });
			}
		});
	}

	componentWillUnmount() {
		this._unsubscribe();
	}

	render() {
		if (!this.state || !this.state.post) {
			return <p>Loading...</p>;
		}

		const { id, title, slug, body } = this.state.post;

		return (
			<div>
					<Link to="/admin/">&lt; Back</Link>
					<h1>Edit Post #{id}</h1>

				<form method="post" action="">
					<fieldset className="form-group">
						<label htmlFor="title">Title</label>
						<input name="title" className="form-control"
							defaultValue={title}/>
					</fieldset>
					<fieldset className="form-group">
						<label htmlFor="slug">Slug</label>
						<input name="slug" className="form-control"
							defaultValue={slug}/>
					</fieldset>
					<fieldset className="form-group">
						<label htmlFor="body">Body</label>
						<textarea name="body" className="form-control" rows="10"
							defaultValue={body}></textarea>
					</fieldset>
					<button type="submit" className="btn btn-default">Save Post</button>
				</form>
			</div>
		);
	}
}
