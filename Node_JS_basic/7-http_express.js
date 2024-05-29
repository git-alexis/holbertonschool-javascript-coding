const express = require('express');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = express();

app.get('/', (request, response) => {
  response.write('Hello Holberton School!');
  response.end();
});

app.get('/students', (request, response) => {
  response.write('This is the list of our students\n');
  countStudents(database)
    .then((result) => {
      response.write(`${result.totalNumber}\n`);
      response.write(`${result.CS}\n`);
      response.write(`${result.SWE}`);
      response.end();
    })
    .catch((error) => {
      console.error(error);
      response.write('Cannot load the database');
      response.end();
    });
});

app.listen(1245);

module.exports = app;
