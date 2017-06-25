/*

var expect = require('chai').expect;
var index = require('../src/index');

const context = require('aws-lambda-mock-context');
const ctx = context();

describe("Testing an Intent request for fixturesIntent", function() {
	var speechResponse = null
	var speechError = null

	before(function(done) {
		index.handler({
  "session": {
    "sessionId": "SessionId.4dd4aa2f-7e97-4bad-8bc0-f38714fe891e",
    "application": {
      "applicationId": "amzn1.ask.skill.b3625ed6-243a-460c-8a7b-45f385b32aca"
    },
    "attributes": {},
    "user": {
      "userId": "amzn1.ask.account.AGS2K6E2MQPOPRLEVD7C6ROY5L7CTQKTPZSW7APWERU2IQRJUYK5HGYL3GSRKWTDGHYRCOPFRQ5U7XMBLSGEITVI6AJDF6TXILNBC344S3WTNF4EPB57BDZFAFYAEOOO2DY2TLTL3EBLEONI5KOI35KRMU4IGYUSX5DZ3VPKLPGAIDEMDIXOFMYSROOAEUDA2EKKYLBH67LQTIQ"
    },
    "new": true
  },
  "request": {
    "type": "IntentRequest",
    "requestId": "EdwRequestId.3a76b4ed-9109-4e68-a71c-abc0aa165ca9",
    "locale": "en-GB",
    "timestamp": "2017-06-17T15:28:48Z",
    "intent": {
      "name": "fixturesIntent",
      "slots": {
        "whenWords": {
          "name": "whenWords",
          "value": "what's"
        },
        "matchWords": {
          "name": "matchWords",
          "value": "match"
        }
      }
    }
  },
  "version": "1.0"
}, ctx)

		ctx.Promise
			.then(resp => {
				speechResponse = resp;
				//console.log(speechResponse);
				done();
			})
			.catch(err => {
				speechError = err;
				done();
			})
	})

	describe("The response is structurally correct for Alexa Speech Services", function() {
		it('should not have errored', function() {
			expect(speechError).to.be.null
		})

		it('should have a version', function() {
			expect(speechResponse.version).not.to.be.null
		})

		it('should have a speechlet response', function() {
			expect(speechResponse.response).not.to.be.null
		})

		it('should have session attributes', function() {
			expect(speechResponse.response.sessionAttributes).not.to.be.null
		})

		it("should have a spoken response", () => {
			expect(speechResponse.response.outputSpeech).not.to.be.null
		})

		it("should not end the alexa session", function() {
			expect(speechResponse.response.shouldEndSession).not.to.be.null
			expect(speechResponse.response.shouldEndSession).to.be.true
		})

	})
})

*/