import { h, Component } from 'preact';

import { Template } from '../components/Template';
import { Posts } from '../components/Posts';

export class Homepage extends Component {
	async componentDidMount() {
		const posts = await this.props.api('homepage');

		this.setState({ posts });
	}

	render() {
		const { posts } = this.state;

		return (
			<Template>
				{posts ? <Posts posts={posts} /> : 'Loading...'}
			</Template>
		);
	}
}

