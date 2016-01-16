import React from 'react';
import { Link } from 'react-router';

export default () => (
	<div>
		List page

		<Link to="/admin/posts/add">Add new post</Link>
	</div>
);
