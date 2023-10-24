#!/usr/bin/node
// computes the number of tasks completed by user id

const request = require('request');

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Send a GET request to the JSONPlaceholder API
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else if (response.statusCode !== 200) {
    console.error(response.statusCode);
  } else {
    try {
      const todos = JSON.parse(body);
      const completedTasksByUser = {};

      // Count the completed tasks for each user
      todos.forEach((todo) => {
        if (todo.completed) {
          if (completedTasksByUser[todo.userId]) {
            completedTasksByUser[todo.userId]++;
          } else {
            completedTasksByUser[todo.userId] = 1;
          }
        }
      });

      // Print the result in the specified format
      console.log(completedTasksByUser);
    } catch (parseError) {
      console.error(parseError);
    }
  }
});
