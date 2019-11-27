const database = require('./database');
const marked = require('marked');
const Prism = require('prismjs');
const gravatar = require('gravatar');

marked.setOptions({
	highlight: function(code, lang) {
		if (lang in Prism.languages) {
			return Prism.highlight(code, Prism.languages[lang], lang);
		}
		return code;
	}
});

exports.createTable = function() {
	return database.query(`
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
};

exports.deleteAll = function() {
	return database.query('DELETE FROM posts').then(function() {
		return database.query('ALTER TABLE posts AUTO_INCREMENT = 1');
	});
};

exports.add = function(params) {
	return database
		.query('INSERT INTO posts SET ?', params)
		.then(function(result) {
			return result.insertId;
		});
};

exports.remove = function(id) {
	return database
		.query('DELETE FROM posts WHERE ?', {
			id: id
		})
		.then(function(result) {
			return result.affectedRows;
		});
};

exports.getAll = async function() {
	return addHTMLToPosts(
		await database.query(`
			SELECT *
			FROM posts
			WHERE display = 1
			ORDER BY posted_at DESC
		`)
	);
};

exports.getRecent = async function(count, page = 1) {
	return addHTMLToPosts(
		await database.query(`
			SELECT *
			FROM posts
			WHERE display = 1
			ORDER BY posted_at DESC
			LIMIT ${count * (page - 1)}, ${count}
		`)
	);
};

exports.getBySlug = async function(slug) {
	const posts = addHTMLToPosts(
		await database.query(
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
};

exports.getByCategory = async function(category) {
	const posts = addHTMLToPosts(
		await database.query(
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
};

exports.getByMonth = async function(year, month) {
	const posts = addHTMLToPosts(
		await database.query(
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
};

exports.getComments = async function (id) {
	const comments = await database.query(`
		SELECT *
		FROM comments
		WHERE item = ?
		ORDER BY date ASC
	`, [id]);

	return comments.map(c => {
		return {
			title: c.title,
			author: c.author,
			avatar: gravatar.url(c.email),
			date: c.date,
			body: c.body,
		}
	});
}

exports.update = function(id, params) {
	return database.query(
		`
			UPDATE posts
			SET ?
			WHERE id = ?
		`,
		[params, id]
	);
};

function addHTMLToPosts(posts) {
	return posts.map(p => {
		if (p.html) {
			return p;
		}
		return Object.assign({}, p, { html: marked(p.markdown) });
	});
}
