var chai = require('chai');
var expect = require('chai').expect;
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

var getFootballData = require('../src/helpers/getFootballData')
var apiKey = process.env.FOOTBALL_API_KEY;

console.log(apiKey);

describe("Testing the getFootballData helper function",function() {
	
	describe("Testing team function", function() {
		var data = null;
		var error = null;
		before(function(done) {
			getFootballData.query(apiKey,'teams/@@',66)
			.then(function(response) {
				data = JSON.parse(response);
				done();
			})
		})
		it('Response should not be an array but an object', function() {
			expect(data.name).to.be.a('string');
		})
		it('Response should be a full array of data', function() {
			expect(data.name).to.equal('Manchester United FC');
		})	
	})

	describe("Testing fixtures function", function() {
		var data = null;
		var error = null;
		before(function(done) {
			getFootballData.query(apiKey,'teams/@@/fixtures',66)
			.then(function(response) {
				data = JSON.parse(response);
				done();
			})
		})
		it('Response should not be null', function() {
			expect(data.fixtures).to.not.be.null;
		})
		it('Response should be a type of array', function() {
			expect(data.fixtures).to.be.an('array');
		})
		it('Response should be a full array of data', function() {
			expect(data.fixtures).to.be.an('array').that.is.not.empty;
		})	
		it('Home team name should be a string value', function() {
			expect(data.fixtures[0].homeTeamName).to.be.a('string');
		})		
		it('First fixture for the season should be AFC Bournemouth away (homeTeamName)', function() {
			expect(data.fixtures[0].homeTeamName).to.equal('AFC Bournemouth');
		})	
	})

})

