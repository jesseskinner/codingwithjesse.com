const mysql = require('mysql2');
const connection;

exports.init = function (config) {
	connection = mysql.createConnection(config);
};

exports.disconnect = function () {
	connection.end();
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