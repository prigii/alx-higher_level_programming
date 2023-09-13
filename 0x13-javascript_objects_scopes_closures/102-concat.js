#!/usr/bin/node
const fs = require('fs');

if (process.argv.length !== 5) {
  console.error('Usage: node concatFiles.js <sourceFile1> <sourceFile2> <destinationFile>');
  process.exit(1);
}

const sourceFile1 = process.argv[2];
const sourceFile2 = process.argv[3];
const destinationFile = process.argv[4];

// Read the contents of the first source file
fs.readFile(sourceFile1, 'utf8', (err1, data1) => {
  if (err1) {
    console.error(`Error reading ${sourceFile1}:`, err1);
    process.exit(1);
  }

  // Read the contents of the second source file
  fs.readFile(sourceFile2, 'utf8', (err2, data2) => {
    if (err2) {
      console.error(`Error reading ${sourceFile2}:`, err2);
      process.exit(1);
    }

    // Concatenate the contents of both source files
    const concatenatedData = data1 + data2;

    // Write the concatenated data to the destination file
    fs.writeFile(destinationFile, concatenatedData, (err3) => {
      if (err3) {
        console.error(`Error writing to ${destinationFile}:`, err3);
        process.exit(1);
      }

      console.log(`Files ${sourceFile1} and ${sourceFile2} have been concatenated to ${destinationFile}`);
    });
  });
});
