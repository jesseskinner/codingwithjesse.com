import { h, Component } from 'preact';
import 'bootstrap/dist/css/bootstrap.css';
import { router } from './router';

import AdminTemplate from './adminTemplate.js';

export default class Admin extends Component {
	componentDidMount() {
		router(ctx => this.setState({
			Component: ctx.component,
			params: ctx.params
		}));
	}

	render() {
		const { Component, params } = this.state;

		return (
			<AdminTemplate>
				<Component {...params} />
			</AdminTemplate>
		);
	}
}
