#!/usr/bin/node
//display the status code of a GET request.

const request = require('request');

// Check if the URL is provided as a command-line argument
if (process.argv.length < 3) {
  console.log('Usage: node get-status.js <URL>');
  process.exit(1);
}

const url = process.argv[2];

// Send a GET request
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('code:', response.statusCode);
  }
});
