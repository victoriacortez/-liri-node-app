var key = require('./keys.js');
// var key = key.twitterKeys
var twitnpm = require('twitter');



var client = new twitnpm ({
        consumer_key: key.twitterKeys.consumer_key,
        consumer_secret: key.twitterKeys.consumer_secret,
        access_token_key: key.twitterKeys.access_token_key,
        access_token_secret: key.twitterKeys.access_token_secret,
    });

//commands
var commands = process.argv[2];

if (commands == 'my-tweets') {
	var params = {screen_name: 'Victori98770047'};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (error) throw error
	  if (!error) {
	   	for (var i = 0; i < tweets.length; i++) {
	   		console.log(tweets[i].text)
	   	}
	    
	  } else{
	  	console.log('broken');
	  }
	});
}

var spotify = require('spotify');
var song = process.argv[2]
var url = "https://api.spotify.com/v1/search?q=" + song + "&type=track";

// Get an artist 
//but info in () on line 3 is where it is giving me the spanish artist
spotifyApi.getArtist('2hazSY4Ef3aB9ATXW7F5w3')
  .then(function(data, err) {
    console.log('Artist information', data.body);
  }, 
    console.error(err);
  });

 
spotify.search(url, function(err, response, body) {
	if (song == 'spotify-this-song') {
    if ( !err ) {
         console.log(JSON.parse(body).tracks.items[0].album.name)
    }else{
    	console.log('broken')
    }
 }
    // Do something with 'data' 
});


var request = require('request');
var name = process.argv[3];
var nobody = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json&tomatoes=true";
var url = "http://www.omdbapi.com/?t=" + name + "&y=&plot=short&r=json&tomatoes=true";
request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year: " + JSON.parse(body).Plot);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
    console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
  }
  else{
  	request(nobody, function(error, response,body){
  		if (false) {
    console.log("Title: " + JSON.parse(body).Title);
    console.log("Year: " + JSON.parse(body).Plot);
    console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
    console.log("Country: " + JSON.parse(body).Country);
    console.log("Plot: " + JSON.parse(body).Plot);
    console.log("Actors: " + JSON.parse(body).Actors);
    console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
    console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
  }

  	});
  };
});




