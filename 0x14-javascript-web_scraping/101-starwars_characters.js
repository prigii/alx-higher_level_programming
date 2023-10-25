#!/usr/bin/node
// prints all characters of a Star Wars movie:
const request = require('request');

// Check if the movie ID is provided as a command-line argument
if (process.argv.length < 3) {
  console.log('Usage: node star-wars-characters.js <movie_id>');
  process.exit(1);
}

const movieId = process.argv[2];
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

// Send a GET request to the Star Wars API to retrieve movie details
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    try {
      const movie = JSON.parse(body);

      // Loop through the characters and print their names
      movie.characters.forEach((characterUrl) => {
        request.get(characterUrl, (charError, charResponse, charBody) => {
          if (charError) {
            console.error(charError);
          } else if (charResponse.statusCode !== 200) {
            console.error(charResponse.statusCode);
          } else {
            const character = JSON.parse(charBody);
            console.log(character.name);
          }
        });
      });
    } catch (parseError) {
      console.error(parseError);
    }
  }
});
