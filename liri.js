require("dotenv").config();

var keys = require("./keys.js");



// var axios = require("axios");

// var movieName = process.argv.slice(2).join("+");

// var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";

// console.log(movieUrl);

// axios.get(movieUrl).then(
//   function(response) {
//       console.log(response.data);
//     console.log("The movie's Title is: " + response.data.Title);
//     console.log("The movie'S Year is: " + response.data.Year);
//     console.log("The movie's imbd Rating is: " + response.data.imdbRating);
//     console.log("The movie's Country is: " + response.data.Country);
//     console.log("The movie's Language is: " + response.data.Language);
//     console.log("The movie's Plot is: " + response.data.Plot);
//     console.log("The movie's Actors is: " + response.data.Actors);
//     console.log("The movie's Rotten Tomatoes Rating is: " + response.data.Ratings[1].Value);

//   })
//   .catch(function(error) {
//     if (error.response) {
//       console.log("---------------Data---------------");
//       console.log(error.response.data);
//       console.log("---------------Status---------------");
//       console.log(error.response.status);
//       console.log("---------------Status---------------");
//       console.log(error.response.headers);
//     } else if (error.request) {
//         console.log(error.request);
//     } else {
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
// });

// var artist = process.argv.slice(2).join("+");

// var concertUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

// console.log(concertUrl);

// axios.get(concertUrl).then(
//   function(response) {
//     //   console.log(response.data);
//     //create a for loop

//     console.log("The name of Venue is: " + response.data[0].venue.name);
//     //  console.log("The Venue location is: " + response.data.venue.city);
//     // console.log("The data of event is: " + response.data.datetime);
//     // // console.log("The movie's Country is: " + response.data.Country);
//     // console.log("The movie's Language is: " + response.data.Language);
//     // console.log("The movie's Plot is: " + response.data.Plot);
//     // console.log("The movie's Actors is: " + response.data.Actors);
//     // console.log("The movie's Rotten Tomatoes Rating is: " + response.data.Ratings[1].Value);

//   })
//   .catch(function(error) {
//     if (error.response) {
//       console.log("---------------Data---------------");
//       console.log(error.response.data);
//       console.log("---------------Status---------------");
//       console.log(error.response.status);
//       console.log("---------------Status---------------");
//       console.log(error.response.headers);
//     } else if (error.request) {
//         console.log(error.request);
//     } else {
//       console.log("Error", error.message);
//     }
//     console.log(error.config);
// });
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);

 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {

    if (err) {
    return console.log('Error occurred: ' + err);
  }
 //create another for loop
console.log(data.tracks.items[0].album.artists[0].name); 
});