import { query } from './database';

export function getCategories() {
	return query(`
                SELECT *
                FROM categories
                ORDER BY category ASC
	`);
}
