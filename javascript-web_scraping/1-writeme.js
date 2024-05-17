#!/usr/bin/node

const fs = require('fs');

// Extracting command line arguments
const filePath = process.argv[2];
const content = process.argv[3];

// Writing content to file
fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
