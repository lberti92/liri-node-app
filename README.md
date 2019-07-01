# liri-node-app
Homework 10 (LIRI Bot) Assignment

The challenge was to use Node JS to create a LIRI bot.  LIRI is like iPhone's SIRI.  However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI  is a _Language_Interpretation and Recognition Interface.  LIRI is a command line node app that takes in parameters and returns data based on one of four commands:

  * `movie-this`

  * `concert-this`

  * `spotify-this-song`

  * `do-what-it-says`

## What Each Command Does

1. `node liri.js movie-this <movie name>`

  * Shows the following information in terminal/bash.

    * Title of the movie.
    * Year the movie came out.
    * IMDB Rating of the movie.
    * Rotten Tomatoes Rating.
    * Country where the movie was produced.
    * Language of the movie.
    * Plot of the movie.
    * Actors in the movie.

  * Or if no movie is provided, it will default to "Mr. Nobody"

2. `node liri.js concert-this <artist/group name>`

  * Shows the following information in terminal/bash.

    * Name of Venue
    * Venue Location
    * IMDB Rating of the movie.

2. `node liri.js spotify-this-song <song name>`

  * Shows the following information about the song in terminal/bash window.
    * Artist(s)
    * The song's name
    * A preview link of the song from Spotify
    * The album that the song is from

  * Or if no song is provided, it will default to "The Sign" by Ace of Base.

4. `node liri.js do-what-it-says`

  * Takes the text from random.txt and runs the song through spotify-this-song,"I Want it That Way",
  * movie-this,"Dark Phoenix"  and concert-this,"OneRepublic" command


##Video(GIF) of LIRI BOT
![Gif of LIRI BOT](LIRIBOT.gif)

## Tech used
- Node.js
- Node-Spotify-API NPM Package
- Axios NPM Package (This package was used to grab data from the following APIs.)
    * OMDB API
    * Bands In Town API
- Moment NPM Package
- DotEnv NPM Package 

## Author

* **Lori Berti** - [Lori Berti](https://github.com/lberti92)
