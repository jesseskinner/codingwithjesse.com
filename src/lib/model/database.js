import mysql from 'mysql2';

let connection;

export function init(config) {
	connection = mysql.createConnection(config);
}

export function disconnect() {
	connection.end();
}

export function query(sql, params) {
	return new Promise(function (resolve, reject) {
		connection.query(sql, params, function (error, result) {
			if (error) {
				return reject(error);
			}

			resolve(result);
		});
	});
}
