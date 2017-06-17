var Alexa = require('alexa-sdk');
var apiKey = '97ece57d6dcb4a26b5dea9d35ef31fd9';


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
		httpsGet(apiKey,(fixtures) => {
			//console.log("sent     : " + apiKey);
			//console.log("received : " + fixtures);
			this.emit(':tell', 'The next match is against ' + fixtures[0].homeTeamName)+'.  Would you like the last result?';
		});
	}
};

var https = require('https');
// https is a default part of Node.JS.  Read the developer doc:  https://nodejs.org/api/https.html
// try other APIs such as the current bitcoin price : https://btc-e.com/api/2/btc_usd/ticker  returns ticker.last

function httpsGet(apiKey,callback) {
	var options = {
		host: 'api.football-data.org',
		port: 443,
		path: '/v1/teams/66/fixtures',
		method: 'GET',
		headers: {
			'X-Auth-Token': apiKey
		},
	};

	var req = https.request(options, res => {
		res.setEncoding('utf8');
		var returnData = "";

		res.on('data', chunk => {
			returnData = returnData + chunk;
		});

		res.on('end', () => {
			var fixtures = JSON.parse(returnData).fixtures;
			callback(fixtures); // this will execute whatever function the caller defined, with one argument

		});

	});
	req.end();

}
