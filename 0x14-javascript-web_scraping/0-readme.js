#!/usr/bin/node
// reads and prints the contents of a file

const fs = require('fs');

// Check if the file path is provided as a command-line argument
if (process.argv.length < 3) {
  console.log('Usage: ./read-file.js file');
  process.exit(1);
}

const filePath = process.argv[2];

// Read the file content in utf-8
fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading the file:', error);
  } else {
    console.log('File content:');
    console.log(data);
  }
});
