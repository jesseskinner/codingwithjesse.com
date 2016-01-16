import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AdminTemplate from './adminTemplate.js';
import ListPosts from './posts/list.js';
import AddPost from './posts/add.js';

export default () => (
	<Router history={browserHistory}>
		<Route path="/admin" component={AdminTemplate}>
			<IndexRoute component={ListPosts} />

			<Route path="posts">
				<Route path="add" component={AddPost}/>
			</Route>
		</Route>
	</Router>
);
