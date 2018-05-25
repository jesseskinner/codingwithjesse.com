import $ from 'jquery';

const postsPromise = $.get('/admin/api/posts');

export function getAllPosts() {
	return postsPromise;
}

export function getPost(id) {
  id = +id;
	return postsPromise.then(posts => posts.find(post => post.id === id));
}
