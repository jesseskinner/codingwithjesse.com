import React from 'react';
import { Link } from 'react-router';

export default () => (
	<div>
			<Link to="/admin/">&lt; Back</Link>
			<h1>Add Post</h1>
		<form>
			<fieldset className="form-group">
				<label for="title">Title</label>
				<input name="title" className="form-control"/>
			</fieldset>
			<fieldset className="form-group">
				<label for="slug">Slug</label>
				<input name="slug" className="form-control"/>
			</fieldset>
			<fieldset className="form-group">
				<label for="body">Body</label>
				<textarea name="body" className="form-control" rows="10"></textarea>
			</fieldset>
			<button type="submit" className="btn btn-default">Add Post</button>
		</form>
	</div>
);
