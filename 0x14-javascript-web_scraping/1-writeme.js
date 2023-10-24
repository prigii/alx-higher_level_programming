#!/usr/bin/node
// writes contents to a file

const fs = require('fs');

// Check if the file path and content are provided as command-line arguments
if (process.argv.length < 4) {
  console.log('Usage: node write-file.js <file_path> "<content>"');
  process.exit(1);
}

const filePath = process.argv[2];
const content = process.argv[3];

// Write the content to the file in utf-8
fs.writeFile(filePath, content, 'utf8', (error) => {
  if (error) {
    console.error(error);
  }
});
