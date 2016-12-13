var request = require('request');

var params = {screen_name: 'victori98770047'};
request('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});