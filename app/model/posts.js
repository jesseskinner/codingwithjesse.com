const database = require('./database');

exports.createTable = function () {
	return database.query(`
		CREATE TABLE IF NOT EXISTS posts (
			id int NOT NULL AUTO_INCREMENT,
			title varchar(255) NOT NULL,
			body TEXT NOT NULL,
			slug varchar(128) NOT NULL,
			posted_at TIMESTAMP DEFAULT NOW(),
			PRIMARY KEY (id),
			UNIQUE (slug)
		)
	`);
};

exports.deleteAll = function () {
	return database.query("DELETE FROM posts").then(function () {
		return database.query("ALTER TABLE posts AUTO_INCREMENT = 1");
	});
};

exports.add = function (params) {
	return database.query("INSERT INTO posts SET ?", params)
		.then(function (result) {
			return result.insertId;
		});
};

exports.remove = function (id) {
	return database.query("DELETE FROM posts WHERE ?", {
		id: id
	}).then(function (result) {
		return result.affectedRows;
	});
};

exports.getAll = function () {
	return database.query(`
		SELECT *
		FROM posts
		ORDER BY posted_at DESC
	`);
};

exports.getBySlug = async function (slug) {
	const posts = await database.query(`
		SELECT *
		FROM posts
		WHERE slug = ?
	`, slug);
	
	return posts[0];
};

exports.update = function (id, params) {
	return database.query(`
		UPDATE posts
		SET ?
		WHERE id = ?
	`, [params, id]);
};
