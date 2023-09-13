#!/usr/bin/node
const dict = require('./101-data').dict; // Import the initial dictionary from 101-data.js

// Create a new dictionary of user IDs by occurrence
const newUserDict = {};

for (const userId in dict) {
  const occurrence = dict[userId];
  if (!newUserDict[occurrence]) {
    newUserDict[occurrence] = [];
  }
  newUserDict[occurrence].push(userId);
}

// Print the new dictionary
console.log(newUserDict);
