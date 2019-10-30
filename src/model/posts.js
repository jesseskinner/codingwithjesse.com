let postsPromise;

export function getAllPosts() {
	if (!postsPromise) {
		postsPromise = fetch('/admin/api/posts');
	}
	return postsPromise;
}

export function getPost(id) {
	id = +id;
	return getAllPosts().then(posts => posts.find(post => post.id === id));
}

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];

export function formatDate(timestamp) {
	const date = new Date(timestamp * 1000);

	return `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
}
