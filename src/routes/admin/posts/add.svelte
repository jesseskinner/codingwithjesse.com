<!--
    import { h, Component } from 'preact';

export default class AddPost extends Component {
	setSlug(text) {
		const slug = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
		
		this.setState({ slug });
	}

	render() {
		return (
			<div>
				<a href="/admin/">&lt; Back</a>
				<h1>Add Post</h1>
				<form method="post" action="">
					<fieldset className="form-group">
						<label htmlFor="title">Title</label>
						<input
							name="title"
							className="form-control"
							onInput={event => this.setSlug(event.target.value)}
						/>
					</fieldset>
					<fieldset className="form-group">
						<label htmlFor="slug">Slug</label>
						<input
							name="slug"
							className="form-control"
							onInput={event => this.setSlug(event.target.value)}
							value={this.state.slug}
						/>
					</fieldset>
					<fieldset className="form-group">
						<label htmlFor="body">Body</label>
						<textarea
							name="body"
							className="form-control"
							rows="10"
						/>
					</fieldset>
					<button type="submit" className="btn btn-default">
						Add Post
					</button>
				</form>
			</div>
		);
	}
}

-->