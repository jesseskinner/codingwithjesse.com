export default {
	port: 4321,
	staticFolder: 'public',

	database: {
		socketPath: '/run/mysqld/mysqld.sock',
		user: 'root',
		password: '',
		database: 'codingwithjesse'
	},

	test: {
		database: {
			socketPath: '/run/mysqld/mysqld.sock',
			user: 'root',
			password: '',
			database: 'test_codingwithjesse'
		}
	}
};
