const http = require('http');

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.write('Hello Holberton School!');
  response.end();
})

app.listen(1245);

module.exports = app;
