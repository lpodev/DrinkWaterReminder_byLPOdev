// Required files
var Twit = require('twit')
require('config/.const')
require('controller/controller')

// Load your Twitter API into a Twit
var T = new Twit({
  consumer_key:         consKey,
  consumer_secret:      consSecret,
  access_token:         acceToken,
  access_token_secret:  acceTokenSecret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

// Variable that counts the Reminder number
nbReminder = 0

// Calls the function SetAnInterval that is in controller.js
SetAnInterval();

