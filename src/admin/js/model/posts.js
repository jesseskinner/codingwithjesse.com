import Hoverboard from 'hoverboard';
import $ from 'jquery';

const store = Hoverboard({
  set: (state=[], posts) => posts
});

// load posts via ajax
$.get('/admin/api/posts', posts => store.set(posts));

export default store;
