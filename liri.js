require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");
var moment = require("moment");
var fs = require("fs");

var activity = process.argv[2] || "bad";
var value = process.argv.slice(3).join("+");

function movie() {

  if (!value) {
    value = "Mr. Nobody";
  }

  var movieUrl = "http://www.omdbapi.com/?t=" + value + "&apikey=trilogy";

  axios.get(movieUrl).then(
    function (response) {

      var jsonData = response.data;

      var movieData = [];

      movieData.push(
        "Title: " + jsonData.Title,
        "Year: " + jsonData.Year,
        "IMDB Rating: " + jsonData.imdbRating,
        "Rotten Tomatoes Rating: " + jsonData.Ratings[1].Value,
        "Country: " + jsonData.Country,
        "Language: " + jsonData.Language,
        "Actor(s): " + jsonData.Actors,
        "Plot: " + jsonData.Plot
      )

      fs.appendFile("log.txt", movieData.join(" "), function (err) {
        if (err) throw err;
      })
      console.log(movieData.join("\n"));
    })
    .catch(function (err) {
      console.log(err);
    });
}

function artist() {

  var concertUrl = "https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp";

  axios.get(concertUrl).then(
    function (response) {

      var jsonData = response.data;

      for (var i = 0; i < jsonData.length; i++) {

        var concertData = [
          jsonData[i].venue.city + ", " + jsonData[i].venue.region + " " + jsonData[i].venue.country + " at " +
          jsonData[i].venue.name + " " + moment(jsonData[i].datetime).format("dddd, MMMM Do YYYY, h:mm:ss a")
        ].join("\n");

        fs.appendFile("log.txt", concertData, function (err) {
          if (err) throw err;
        })
        console.log(concertData);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

function music() {
  var Spotify = require('node-spotify-api');

  var spotify = new Spotify(keys.spotify);
  var value = process.argv.slice(3).join(" ");

  if (!value) {
    value = "The Sign";
  }
  spotify
    .search({ type: 'track', query: value, limit: 1 })
    .then(function (response) {

      var jsonData = response.tracks.items;
      var divider = "\n------------------------------------------------------------\n\n";

      for (var i = 0; i < jsonData.length; i++) {

        var artistData = [];

        for (var j = 0; j < jsonData[i].album.artists.length; j++) {
          artistData.push(jsonData[i].album.artists[j].name);
        }

        var songData = [];
        songData.push(
          "Artist(s): " + artistData.join(", "),
          "Song Name: " + jsonData[i].name,
          "Preview song: " + jsonData[i].album.external_urls.spotify,
          "Album: " + jsonData[i].album.name,
        )
        fs.appendFile("log.txt", songData.join(" ") + divider, function (err) {
          if (err) throw err;
        })
        console.log(songData.join("\n") + divider);
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
    var dataArr = data.split(",");
    activity = dataArr[0];
    value = dataArr[1];

    switchFunc(activity, value);
  })
}

function switchFunc(action, item) {
  switch (action.toLowerCase()) {
    case "movie-this":
      movie(item);
      break;
    case "concert-this":
      artist(item);
      break;
    case "spotify-this-song":
      music(item);
      break;
    case "do-what-it-says":
      doAnything();
      break;
    default:
      return console.log("Invalid request");
  }
}
switchFunc(activity, value);