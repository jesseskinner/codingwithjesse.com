import { h, render, Component } from 'preact';
import { api } from './api';
import { router } from './router';

export default class Website extends Component {
	componentDidMount() {
		router(ctx => this.setState({
			Component: ctx.component,
			params: ctx.params
		}));
	}

	render() {
        console.log('[Website] render', this.state);

		const { Component, params } = this.state;

        if (Component) {
            return (
                <Component {...params} {...this.props} />
            );
        }
	}
}

console.log('[init]');

const root = document.createElement('div');

document.body.appendChild(root);

render(<Website api={api} />, root);
