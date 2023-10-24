#!/usr/bin/node
// gets the contents of a webpage and stores it in a file.

const request = require('request');
const fs = require('fs');

// Check if the URL and file path are provided as command-line arguments
if (process.argv.length < 4) {
  console.log('Usage: node fetch-and-save.js <URL> <file_path>');
  process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Send a GET request to the URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    // Write the body response to the specified file in utf-8 encoding
    fs.writeFile(filePath, body, 'utf8', (writeError) => {
      if (writeError) {
        console.error(writeError);
      } else {
        console.log(filePath);
      }
    });
  }
});
