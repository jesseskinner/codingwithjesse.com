var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var expect = chai.expect;

var database = require('../../../app/model/database');
var config = require('../../config');

database.init(config.database);

describe('database.query', function () {
	it('should let me run a query', function () {
		return expect(
			database.query('SELECT 5 as value')
		).to.eventually.deep.equal([{value:'5'}]);
	});
});
