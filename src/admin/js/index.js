import Admin from './view/Admin.svelte';

const target = document.createElement('div');

document.body.appendChild(target);

new Admin({
	target
});
