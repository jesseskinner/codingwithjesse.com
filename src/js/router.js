import page from 'page';

import { Homepage } from './pages/Homepage.js';
import { Article } from './pages/Article.js';

const routes = {
    '/': Homepage,
    '/article/:slug': Article
};

Object.keys(routes).forEach(path =>
    page(path, (ctx, next) => {
        ctx.component = routes[path];
        next();
    })
);

export function router(callback) {
    page(callback);
    page();
};
