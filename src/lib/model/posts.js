import { query } from './database';
import marked from 'marked';
import Prism from 'prismjs';
import gravatar from 'gravatar';

marked.setOptions({
	highlight: function (code, lang) {
		if (lang in Prism.languages) {
			return Prism.highlight(code, Prism.languages[lang], lang);
		}
		return code;
	}
});

export function createTable() {
	return query(`
		CREATE TABLE IF NOT EXISTS posts (
			id int NOT NULL AUTO_INCREMENT,
			title TEXT NOT NULL,
			html TEXT NULL,
			markdown TEXT NULL,
			slug varchar(128) NOT NULL,
			display tinyint NOT NULL DEFAULT 1,
			tags text NOT NULL,
			category int NOT NULL DEFAULT 0,
			posted_at TIMESTAMP DEFAULT NOW(),
			PRIMARY KEY (id),
			KEY (slug)
		) ENGINE=MyISAM DEFAULT CHARSET=utf8
	`);
}

export function deleteAll() {
	return query('DELETE FROM posts').then(function () {
		return query('ALTER TABLE posts AUTO_INCREMENT = 1');
	});
}

export function add(params) {
	return query('INSERT INTO posts SET ?', params).then(function (result) {
		return result.insertId;
	});
}

export function remove(id) {
	return query('DELETE FROM posts WHERE ?', {
		id: id
	}).then(function (result) {
		return result.affectedRows;
	});
}

export async function getAll(includeHidden = false) {
	return addHTMLToPosts(
		await query(`
			SELECT posts.id, posts.title, posts.slug, posts.markdown, posts.html, posts.posted_at, categories.category
			FROM posts
			LEFT JOIN categories ON categories.id = posts.category
			${includeHidden ? '' : 'WHERE posts.display = 1'}
			ORDER BY posts.posted_at DESC
		`)
	);
}

export async function getRecent(count, page = 1) {
	return addHTMLToPosts(
		await query(`
			SELECT *
			FROM posts
			WHERE display = 1
			ORDER BY posted_at DESC
			LIMIT ${count * (page - 1)}, ${count}
		`)
	);
}

export async function getBySlug(slug) {
	const posts = addHTMLToPosts(
		await query(
			`
				SELECT *
				FROM posts
				WHERE slug = ?
				ORDER BY posted_at DESC
				LIMIT 1
			`,
			slug
		)
	);

	return posts[0];
}

export async function getByCategory(category) {
	const posts = addHTMLToPosts(
		await query(
			`
				SELECT posts.*
				FROM posts
				LEFT JOIN categories
					ON categories.id = posts.category
				WHERE categories.category = ?
				ORDER BY posted_at DESC
			`,
			[category]
		)
	);

	return posts;
}

export async function getByMonth(year, month) {
	const posts = addHTMLToPosts(
		await query(
			`
				SELECT *
				FROM posts
				WHERE YEAR(posted_at) = ?
				AND MONTH(posted_at) = ?
				ORDER BY posted_at DESC
			`,
			[year, month]
		)
	);

	return posts;
}

export async function getComments(id) {
	const comments = await query(
		`
		SELECT *
		FROM comments
		WHERE item = ?
		ORDER BY date ASC
	`,
		[id]
	);

	return comments.map((c) => {
		return {
			title: c.title,
			author: c.author,
			avatar: gravatar.url(c.email),
			date: c.date,
			body: c.body
		};
	});
}

export function update(id, params) {
	return query(
		`
			UPDATE posts
			SET ?
			WHERE id = ?
		`,
		[params, id]
	);
}

function addHTMLToPosts(posts) {
	return posts.map((p) => {
		if (p.html) {
			return p;
		}
		return Object.assign({}, p, { html: marked(p.markdown) });
	});
}
