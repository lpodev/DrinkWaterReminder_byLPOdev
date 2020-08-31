var Twit = require('twit')

var T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})

//
//  tweet 'Water Reminder'
//
T.post('statuses/update', { status: 'Test: Go get some water !' }, function(err, data, response) {
  console.log(data)
})
