var fs = require('fs');
var Twitter = require('twitter');
var keys = require('./keys.js');
var spotify = require('spotify');
var request = require('request');

var arg = process.argv[2];
var arg2 = process.argv[3];

var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret

});

if(arg == "my-tweets"){

client.get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=boxingpt&count=5', function(error, tweets, response) {

    if (error) throw error;
    var results = JSON.stringify(tweets);
   	for (var i = 0; i < tweets.length; i++) {
   		console.log(tweets[i].text);
   	}
});
}

if (arg == "spotify-this-song"){

spotify.search({type: 'track', query: arg2}, function(err, data){
	if(err){
		console.log('Error occurred: ' + err);
		return;
	}

	//console.log(JSON.stringify(data.tracks.items[0]));
	console.log(data.tracks.items[0].artists[0].name);
	console.log(data.tracks.items[0].album.name);
	console.log(data.tracks.items[0].preview_url);
	console.log(data.tracks.items[0].name);
	
	

});
}

if(arg == 'movie-this'){
request('https://www.omdbapi.com/?t='+ arg2+ '&y=&plot=short&tomatoes=true&r=json' , function(error, response, body){
	
	if (!error && response.statusCode == 200){
			var mov = JSON.parse(body);
			console.log(mov.Title);
			console.log(mov.Year);
			console.log(mov.Rating);
			console.log(mov.Plot);
			console.log(mov.Actors);
			
	}

});
}




// title
// year
// imdb rating
// country 
// language
// plot
// Actors 
// rottent tomatoes rating 
// rotoon tomatoes Url 

// if no movie provided  you should watch mr nobody. 





// if (arg = "my-tweets") {
// 	queryUrl = 'https://api.twitter.com/1.1/search/tweets.json' 
//     $.ajax({
//         url: queryUrl,
//         method: 'GET'

//     }).done(function(response) {
//     	console.log(response)

//     });

// }
