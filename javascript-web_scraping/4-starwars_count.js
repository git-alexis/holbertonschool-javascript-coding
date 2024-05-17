#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }
  const movies = JSON.parse(body);
  const movieWithAntilles = movies.results.filter(movie => movie.characters.find(character => character.includes('18'))
  );
  console.log(movieWithAntilles.length);
});
