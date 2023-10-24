#!/usr/bin/node
// prints the title of a Star Wars movie where
// the episode number matches a given integer.

const request = require('request');

// Check if the movie ID is provided as a command-line argument
if (process.argv.length < 3) {
  console.log('Usage: node star-wars-movie.js <movie_id>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Send a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
  } else {
    try {
      const movie = JSON.parse(body);
      console.log(movie.title);
    } catch (parseError) {
      console.error('Error parsing API response:', parseError);
    }
  }
});
