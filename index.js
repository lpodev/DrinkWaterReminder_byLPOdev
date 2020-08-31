let nbReminder = 0;
var Twit = require('twit');

// Twitter's API
var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

SetAnInterval();

function SetAnInterval() {
  setInterval(postTweet,1000*60*60);
}

function postTweet()
{
  nbReminder += 1;
  //
  //  tweet 'Water Reminder'
  //
  T.post('statuses/update', { status: "Reminder n°" + nbReminder +" \n🥤 Go get some water bro 🥤 " }, function(err, data, response) {
    console.log(data);
  });
  return "Done";
}
