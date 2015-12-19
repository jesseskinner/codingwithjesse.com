var chai = require("chai");
var expect = chai.expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var database = require('../../../app/model/database');
var config = require('../../config');

database.init(config.database);

describe('database.query', function () {
	it('should let me run a query without params', function () {
		return expect(
			database.query('SELECT 5 as value')
		).to.eventually.deep.equal([{value:5}]);
	});

	it('should let me run a query with params', function () {
		return expect(
			database.query(
				'SELECT ? as value', [6]
			)
		).to.eventually.deep.equal([{value:6}]);
	});
});
