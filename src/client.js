import * as sapper from '@sapper/app';

// disable client-side routing
// addEventListener('click', event => {
// 	if (event.target.nodeName === 'A') {
// 		event.target.rel = 'external';
// 	}
// });

sapper.start({
	target: document.querySelector('body'),
});
