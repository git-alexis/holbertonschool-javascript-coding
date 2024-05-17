#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const todos = JSON.parse(body);
  const tasksCompletedByUser = {};

  for (const todo of todos) {
    if (todo.completed) {
      if (tasksCompletedByUser[todo.userId]) {
        tasksCompletedByUser[todo.userId]++;
      } else {
        tasksCompletedByUser[todo.userId] = 1;
      }
    }
  }
  console.log(tasksCompletedByUser);
});
