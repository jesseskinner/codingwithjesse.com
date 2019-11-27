const database = require('./database');

exports.getCategories = function() {
        return database.query(`
                SELECT *
                FROM categories
                ORDER BY category ASC
	`);
};
