#!/usr/bin/node
const list = require('./100-data').list; // Import the initial array from 100-data.js

// Use map to create a new array with values multiplied by their index
const newList = list.map(function (value, index) {
  return value * index;
});

// Print both the initial and new arrays
console.log(list);
console.log(newList);
