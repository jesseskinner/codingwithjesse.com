import { h, Component } from 'preact';
import 'bootstrap/dist/css/bootstrap.css';
import { onRoute, getComponent } from './router';

import AdminTemplate from './adminTemplate.js';

export default class Admin extends Component {
	constructor() {
		super();

		this.state = {
			Component: getComponent()
		};
	}

	componentDidMount() {
		onRoute(({ component, params }) => this.setState({
			Component: component,
			params: params
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
