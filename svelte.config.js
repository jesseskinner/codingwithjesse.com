import nodeAdapter from '@sveltejs/adapter-node';
import staticAdapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter:
			process.env.NODE_ENV === 'production'
				? staticAdapter({
						// default options are shown
						pages: 'build',
						assets: 'build',
						fallback: null,
						strict: false
				  })
				: nodeAdapter()
	}
};
