#!/usr/bin/node
// prints the number of movies where the
// character “Wedge Antilles” is present.

const request = require('request');

// Check if the API URL is provided as a command-line argument
if (process.argv.length < 3) {
  console.log('Usage: node wedge-antilles.js <api_url>');
  process.exit(1);
}

const apiUrl = process.argv[2];
const characterId = 18;

// Send a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
  } else {
    try {
      const data = JSON.parse(body);
      const moviesWithWedgeAntilles = data.results.filter((film) =>
        film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
      );
      const movieCount = moviesWithWedgeAntilles.length;

      console.log('Number of movies with Wedge Antilles:', movieCount);
    } catch (parseError) {
      console.error('Error parsing API response:', parseError);
    }
  }
});
