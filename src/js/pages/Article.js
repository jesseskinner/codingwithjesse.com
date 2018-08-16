import { h, Component } from 'preact';

import { Template } from '../components/Template';
import { Posts } from '../components/Posts';

export class Article extends Component {
	async componentDidMount() {
        const { slug } = this.props;

		const article = await this.props.api('article', {
            slug
        });
        console.log('we got', article)

		this.setState({ article });
	}

	render() {
		const { article } = this.state;
        
        console.log('[Article] render()', this.state);

		return (
			<Template>
				{article ? <Posts posts={[article]} /> : 'Loading...'}
			</Template>
		);
	}
}

