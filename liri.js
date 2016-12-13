var key = require('./keys.js');
// var key = key.twitterKeys
var twitnpm = require('twitter');



var client = new twitnpm ({
        consumer_key: key.twitterKeys.consumer_key,
        consumer_secret: key.twitterKeys.consumer_secret,
        access_token_key: key.twitterKeys.access_token_key,
        access_token_secret: key.twitterKeys.access_token_secret
    });





var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Rick Astley - Never Gonna Give You Up ' + err);
        return;
    } 
});

//commands
var commands = process.argv[2];
if (commands == 'my-tweets') {
	var params = {screen_name: 'Victori98770047'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	   	for (var i = 0; i < tweets.length; i++) {
	   		console.log(tweets[i].text)
	   	}
	    
	  }
	});
}
	