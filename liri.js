require("dotenv").config();
var fs = require("fs");

var keys = require("./keys.js");
var axios = require("axios");

// var activity = process.argv[2] || "bad";
// var value = process.argv.slice(3).join("+");
// console.log()


function movie() {

  var movieName = process.argv.slice(3).join(" ");
  var movieUrl = "http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";

  console.log(movieUrl);

  axios.get(movieUrl).then(
    function (response) {

      for (var i = 0; i < response.data.length; i++) {
        console.log(response.data);
        console.log("The movie's Title is: " + response.data.Title);
        console.log("The movie'S Year is: " + response.data.Year);
        console.log("The movie's imbd Rating is: " + response.data.imdbRating);
        console.log("The movie's Country is: " + response.data.Country);
        console.log("The movie's Language is: " + response.data.Language);
        console.log("The movie's Plot is: " + response.data.Plot);
        console.log("The movie's Actors are: " + response.data.Actors);
        console.log("The movie's Rotten Tomatoes Rating is: " + response.data.Ratings[1].Value);
      }
    })
    .catch(function (error) {
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);
    });
}

function artist() {
  var artist = process.argv.slice(3).join(" ");

  var concertUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

  axios.get(concertUrl).then(
    function (response) {
      // console.log(response.data);
      //create a for loop
      for (var i = 0; i < response.data.length; i++) {
        console.log("The name of Venue is: " + response.data[i].venue.name);
        console.log("The Venue location is: " + response.data[i].venue.city);
        console.log("The Venue location is: " + response.data[i].venue.region);
        console.log("The Venue location is: " + response.data[i].venue.country);

        // console.log("The data of event is: " + moment(response.data.datetime).format("dddd, MMMM Do YYYY, h:mm:ss a"));
        console.log("The date of event is: " + response.data[i].datetime);

        // moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
        // moment(response.data.datetime).format("dddd, MMMM Do YYYY, h:mm:ss a")     
      }
    })
    .catch(function (error) {
      if (error.response) {
        console.log("---------------Data---------------");
        console.log(error.response.data);
        console.log("---------------Status---------------");
        console.log(error.response.status);
        console.log("---------------Status---------------");
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
      console.log(error.config);

    });
}

function music() {
  var Spotify = require('node-spotify-api');

  var spotify = new Spotify(keys.spotify);
  var song = process.argv.slice(2).join(" ");

  spotify
    .search({ type: 'track', query: song, limit: 10 })
    .then(function (response) {
      // console.log(response.tracks.items);
      for (var i = 0; i < response.tracks.items.length; i++) {
        console.log(response.tracks.items[i].name);
        console.log(response.tracks.items[i].album.external_urls.spotify);
        console.log(response.tracks.items[i].album.name);
        for (var j = 0; j < response.tracks.items[i].album.artists.length; j++) {
          console.log(response.tracks.items[i].album.artists[j].name);
          console.log("===================================================");
        }
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function doAnything() {
  fs.readFile("random.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err)
    }
    console.log(data);
  })



}
// function switchFunc(activity, value) {
switch (activity.toLowerCase()) {
  case "movie-this":
    console.log("movie");
    movie(value);
    break;
  case "concert-this":
    artist(value);
    break;
  case "spotify-this-song":
    music(value);
    break;
  case "do-what-it-says":
    doAnything();
    break;
  default:
    return console.log("Invalid request");
}
// }
// switchFunc(action, amount);