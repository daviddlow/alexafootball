var Alexa = require('alexa-sdk');
var apiKey = process.env.FOOTBALL_API_KEY
var getFootballData = require('./helpers/getFootballData');

exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context);
	alexa.appId = 'amzn1.ask.skill.b3625ed6-243a-460c-8a7b-45f385b32aca';
	alexa.registerHandlers(handlers);
	alexa.execute();
};

var handlers = {
	'LaunchRequest': function() {
		this.emit(':ask', 'Welcome to the Manchester United Database.  What would you like to ask for today?  For example you could say, whats the next fixture?');
	},
	'fixturesIntent': function() {
		getFootballData.query(apiKey,'teams/@@/fixtures',66,(response) => {
			this.emit(':tell', 'The next match is against ' + response.fixtures[0].homeTeamName)+'.  Would you like the last result?';
		});
	}
};

