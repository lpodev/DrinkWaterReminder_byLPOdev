// Required files
var Twit = require('twit')
require('./config/.const')
require ('./data/data')

// Load your Twitter API into a Twit
var T = new Twit({
  consumer_key:         consKey,
  consumer_secret:      consSecret,
  access_token:         acceToken,
  access_token_secret:  acceTokenSecret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

let nbReminder = 43 // Variable that counts the Reminder number

SetAnInterval() // Calls the function SetAnInterval that is in controller.js

/** Controller */
function SetAnInterval() {

    setInterval(postTweet,1000*60*60);
}

function postTweet(nbReminder)
{
    nbReminder += 1
    var tweet = getTweetToPost()
    //  tweet 'Drink Water Reminder'
    T.post('statuses/update', { status: "Reminder n°" + nbReminder + tweet }, function(err, data, response) {
        console.log(data)
    })
    return "Reminder posted, see you in one hour.";
}

/** Model */
// Required files
require('./data/data')

function getTweetToPost()
{
    let randomIndex = Math.floor(Math.random() * 5)     // returns a random integer from 0 to 4

    return message[randomIndex]
}
