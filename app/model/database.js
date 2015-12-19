var mysql = require('mysql2');
var connection;

exports.init = function (config) {
	connection = mysql.createConnection(config);
};

exports.query = function (sql, params) {
	return new Promise(function (resolve, reject) {
		connection.query(sql, params, function(error, result) {
			if (error) {
				return reject(error);
			}

			resolve(result);
		});
	});
};