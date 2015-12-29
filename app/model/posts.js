var database = require('./database');

exports.createTable = function () {
	return database.query(`
		CREATE TABLE IF NOT EXISTS posts (
			id int NOT NULL AUTO_INCREMENT,
			title varchar(255) NOT NULL,
			body TEXT NOT NULL,
			slug varchar(255) NOT NULL,
			PRIMARY KEY (id),
			INDEX (slug)
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
