var database = require('./database');

exports.createTable = function () {
	return database.query(`
		CREATE TABLE posts (
			id int NOT NULL AUTO_INCREMENT,
			title varchar(255) NOT NULL,
			body TEXT NOT NULL,
			slug varchar(255) NOT NULL,
			PRIMARY KEY (id),
			INDEX (slug)
		)
	`);
};

exports.dropTable = function () {
	return database.query("DROP TABLE IF EXISTS posts");
};

exports.add = function (params) {
	return database.query("INSERT INTO posts SET ?", params)
		.then(function (result) {
			return result.insertId;
		});
};
