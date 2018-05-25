import { h, Component } from 'preact';
import { getPost } from '../../model/posts';

export default class PostEdit extends Component {
	async componentDidMount() {
		this.setState({ post: await getPost(this.props.id) });
	}

	render() {
		if (!this.state || !this.state.post) {
			return <p>Loading edit page...</p>;
		}

		const { id, title, slug, body } = this.state.post;

		return (
			<div>
				<a href="/admin/">&lt; Back</a>
				<h1>Edit Post #{id}</h1>

				<form method="post" action="">
					<fieldset className="form-group">
						<label htmlFor="title">Title</label>
						<input
							name="title"
							className="form-control"
							defaultValue={title}
						/>
					</fieldset>
					<fieldset className="form-group">
						<label htmlFor="slug">Slug</label>
						<input
							name="slug"
							className="form-control"
							defaultValue={slug}
						/>
					</fieldset>
					<fieldset className="form-group">
						<label htmlFor="body">Body</label>
						<textarea
							name="body"
							className="form-control"
							rows="10"
							defaultValue={body}
						/>
					</fieldset>
					<button type="submit" className="btn btn-default">
						Save Post
					</button>
					<button
						name="submit"
						value="delete"
						type="submit"
						className="btn btn-danger"
					>
						Delete Post
					</button>
				</form>
			</div>
		);
	}
}
