#!/usr/bin/node
// computes the number of tasks completed by user id

const request = require('request');

// Define the API URL
const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Send a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode);
  } else {
    try {
      const tasks = JSON.parse(body);

      // Create a map to store the count of completed tasks for each user
      const completedTaskCounts = new Map();

      // Filter and count completed tasks
      tasks.forEach((task) => {
        if (task.completed) {
          const userId = task.userId;
          if (completedTaskCounts.has(userId)) {
            completedTaskCounts.set(userId, completedTaskCounts.get(userId) + 1);
          } else {
            completedTaskCounts.set(userId, 1);
          }
        }
      });

      // Print users with completed tasks
      completedTaskCounts.forEach((count, userId) => {
        console.log(`User ID ${userId} completed ${count} tasks.`);
      });
    } catch (parseError) {
      console.error('Error parsing API response:', parseError);
    }
  }
});
