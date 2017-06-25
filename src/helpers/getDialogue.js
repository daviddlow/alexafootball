var dialogue = {};

dialogue.phrases = {
    welcome: {
    /* When the app loads */
        prompt: [
			"Thank you for using the Football Fixtures skill.  Which team would you like results and fixtures for?"
        ],
        reprompt: [
			"Please tell us which team you're interested in and we'll get the last result and next fixture.  Promise we'll be as quick as we can. "
        ]
    },
    generic: {
        rogers: [
        /* On any successful recognition */
		    "Thanks! ",
		    "Great! ",
			"Cool! ",
			"Excellent! ",
			"Got it. ",
			"Okay. ",
			"Perfect. ",
			"Ideal. ",
			"Super. ",
			"Good stuff. ",
			"Thats great. ",
			"Many thanks. ",
			"Thanks for that. ",
            "Okay. ", 
			"Got it. ", 
			"Sounds nice. ", 
			"Great. ", 
			"Awesome. ", 
			"Smashing! ", 
			"Well why not. ", 
			"Aha! ", 
			"Sounds cool. ",
			"Okay. "
        ],
        pardon: [
        /* On failed recognition */
            "Sorry I didn't quite get it.",
            "Excuse me? What do you mean?",
            "Pardon me?",
            "Sorry? Was that about @@?",
            "Sorry, not sure what you were talking about...",
            "I'm sorry. Are we still talking about @@?",
            "Sorry, can you try a full sentence please?",
            "Not sure if you'd like that as your @@",
            "Don't think you're talking about @@. Sorry.",
            "Yawn... Oops I wasn't listening. Apologies!",
            "Oh so sorry - I must have been spaced out for a moment.",
            "Go ahead. I'm listening...",
            "Sorry I didn't understand what you said there."
        ],
        youTalkingToMe: [
        /* When told any swear words */

        ],
		startOver: [
			"OK, let's start that again. ",
			"No problem, it won't take long to go back through that. ",
			"OK, we shall do that again as quickly as we can."
		],
		stop: [
			"OK."
		]
    },

    help: {
        generic: [
        /* Basic help */
			""
        ]
    },
	
    validation: {
        generic: [
        /* Basic validation message */
			"Ywe didn't quite understand that @@.  Could you try that again please?. "
        ]
    },

    /*
     queryTemplate: {
         prompt: [],
         reprompt: [],
         intent: "",
         slots: {},
         utterance: [],
         echos: []
     },
     */
};

/*
** Picks a random dialogue from an array (if it is an array).
** Can override with a number to choose one from the array.
** - pickDlg(['a','b','','c']) returns a random string from the array
** - pickDlg(['a','b','','c'],1) returns 'b'
** - pickDlg('a') returns 'a'
*/
dialogue.pickPhrase = function(_arr,_num) {
    var _rtn = null;
    if(!1==1) {
        _rtn = _arr;
    } else if (parseInt(_num)>=0) {
        if(_arr[parseInt(_num)]) _rtn = _arr[parseInt(_num)];
    } else {
        _rtn = _arr[Math.floor(Math.random()*_arr.length)];
    }
    if (_rtn===null) {
        console.warn('ERROR: Missing dialogue data');
        return '';
    } else {
        return _rtn;
    }
}

module.exports = dialogue;