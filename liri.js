var key = require('./keys.js');
// var key = key.twitterKeys
// ndm requires
var twitnpm = require('twitter');
var request = require('request');

// twitter key
var client = new twitnpm ({
    consumer_key: key.twitterKeys.consumer_key,
    consumer_secret: key.twitterKeys.consumer_secret,
    access_token_key: key.twitterKeys.access_token_key,
    access_token_secret: key.twitterKeys.access_token_secret,
});

// commands
var commands = process.argv[2];
// name for movie search
var name = "";
for (var i = 3; i < process.argv.length; i++) {
    name += process.argv[i] + " ";
}
// movie searches
var nobody = "http://www.omdbapi.com/?t=mr+nobody&y=&plot=short&r=json&tomatoes=true";
var url = "http://www.omdbapi.com/?t=" + name + "&y=&plot=short&r=json&tomatoes=true";

// twitter calls!
if (commands == 'my-tweets') {
    var params = {screen_name: 'Victori98770047'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
            }
        }
        else {
            console.log('broken');
        }
    });
}
//omdb stuff
else if (commands == 'movie-this' && name) {
    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
        }
        else {
            console.log('broken');
        }
    });
}

else if (commands == 'movie-this' && name == "") {
    request(nobody, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            console.log("Rotten Tomatoes URL: " + JSON.parse(body).tomatoURL);
        }
        else {
            console.log('broken');
        }
    });
}

//fs
var fs = require('fs');

fs.readFile('random.txt', 'utf8', function(error, data){
	if (error) return console.log(error);

	console.log(data);
});

function spotifyThis(){
var spotify = require('spotify');
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    }// Do something with 'data' 
});