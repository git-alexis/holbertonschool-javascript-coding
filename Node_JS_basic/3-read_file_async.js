const fs = require('fs');

function countStudents(path) {

  return new Promise((resolve, reject) => {

    fs.readFile(path, 'utf8', (err, data) => {

      if (err) {
        reject(new Error('Cannot load the database'));

      } else {
        //console.log(data);
        const lines = data.split('\n');
        //console.log(lines);

        const students = lines.slice(1).filter(line => line).map(line => line.split(','));
        //console.log(students);

        const numberOfStudents = students.length;

        console.log(`Number of students: ${numberOfStudents}`);
        
        const fields = [...new Set(students.map(student => student[3]))];
        //console.log(fields);

        fields.forEach((field) => {

          const studentsInField = students.filter(student => student[3] === field);
          //console.log(studentsInField);

          console.log(`Number of students in ${field}: ${studentsInField.length}. List: ${studentsInField.map(s => s[0]).join(', ')}`);
        });

        resolve();
      }
    });
  });
}

module.exports = countStudents;
