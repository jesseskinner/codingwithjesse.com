var chai = require("chai");
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var posts = require('../../../app/model/posts');
var database = require('../../../app/model/database');
var config = require('../../config');

database.init(config.database);

beforeEach(function () {
	return posts.dropTable().then(function () {
		return posts.createTable();
	});
});

describe('posts', function () {
	it('should add a post', function () {
		return expect(posts.add({
			title: 'Test',
			body: 'Hello',
			slug: 'test'

		})).to.eventually.equal(1);
	});
});
