var config = require('../config');
var database = require('./model/database');

console.log('Initializing database...');
database.init(config.database);

console.log('Creating posts table...');
var posts = require('./model/posts');
posts.createTable();

console.log('Disconnecting from database...');
database.disconnect();
