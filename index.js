//
//  tweet 'Water Reminder'
//
T.post('statuses/update', { status: 'Test: Go get some water !' }, function(err, data, response) {
  console.log(data)
})
