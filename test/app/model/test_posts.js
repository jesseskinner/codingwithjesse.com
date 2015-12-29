var chai = require("chai");
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var posts = require('../../../app/model/posts');
var database = require('../../../app/model/database');
var config = require('../../config');

describe('posts', function () {
	before(function () {
		database.init(config.database);
		return posts.createTable();
	});

	beforeEach(function () {
		return posts.deleteAll();
	});

	describe('#add', function () {
		it('should add a post', function () {
			return expect(posts.add({
				title: 'Test',
				body: 'Hello',
				slug: 'test'

			})).to.eventually.equal(1);
		});
	});

	describe('#remove', function () {
		it('should remove a post', function () {
			return expect(
				posts.add({
					title: 'Test',
					body: 'Hello',
					slug: 'test'
				}).then(function (id) {
					return posts.remove(id);
				})
			).to.eventually.equal(1);
		});
	});
});
