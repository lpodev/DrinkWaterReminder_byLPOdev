// Required files
var Twit = require('twit')
require ('./config/.const')
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

let nbReminder = 0 // Variable that counts the Reminder number

// Timer controls
const minuteOfTheHour = 0;      // Checks if it is the minute zero of each hour (Ex: 12:00 or 20:00)
let notYetPostedThisHour = true;
setInterval(timeCheck,1000*55);     //checks the time every 55 seconds


/** Controller */
//check the actual time
function timeCheck() {
    var now = new Date();
    if (now.getMinutes() == minuteOfTheHour) {      //if it's **:00 (ex : 21:00)
        if (notYetPostedThisHour) {         //if there's no tweet at the hour then tweet
            postTweet();
            notYetPostedThisHour = false;
        }
    } else {
        notYetPostedThisHour = true;
    }
}

function postTweet()
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
