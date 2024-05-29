const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }

  if (request.url === '/students') {
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
  }
});

app.listen(1245);

module.exports = app;
