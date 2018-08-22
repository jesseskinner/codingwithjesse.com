import { h } from "preact";
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { Post } from '../../src/js/components/Post';

storiesOf('Post', module).add('post', () => (
	<Post
		post={{
			posted_at: +new Date() / 1000,
      body: `Hello, world!

Here are a list of things:

- pancakes
- bottles
- trees
- nintendos
`,
			title: 'Test',
			url: '/article/test'
		}}
	/>
));
