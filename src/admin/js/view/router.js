import page from 'page';

import PostList from './posts/list.js';
import AddPost from './posts/add.js';
import EditPost from './posts/edit.js';

let Component;

const routes = {
    '/admin/': PostList,
    '/admin/posts/add': AddPost,
    '/admin/posts/edit/:id': EditPost
};

Object.keys(routes).forEach(path =>
    page(path, (ctx, next) => {
        Component = ctx.component = routes[path];
        next();
    })
);

page();

export const onRoute = page;
export const getComponent = () => Component;
