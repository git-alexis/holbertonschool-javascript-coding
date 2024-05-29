const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const students = lines.slice(1).filter(Boolean).map((line) => line.split(','));

        const studentsInFields = { CS: [], SWE: [] };

        students.forEach((student) => {
          if (student[3] === 'CS') {
            studentsInFields.CS.push(student[0]);
          } else if (student[3] === 'SWE') {
            studentsInFields.SWE.push(student[0]);
          }
        });

        const totalStudents = students.length;

        console.log(`Number of students: ${totalStudents}`);

        const csStudents = studentsInFields.CS;
        const sweStudents = studentsInFields.SWE;

        console.log(`Number of students in CS: ${csStudents.length || 0}. List: ${csStudents.join(', ')}`);
        console.log(`Number of students in SWE: ${sweStudents.length || 0}. List: ${sweStudents.join(', ')}`);

        const result = {
          totalNumber: `Number of students: ${totalStudents}`,
          CS: `Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`,
          SWE: `Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`,
        };

        resolve(result);
      }
    });
  });
}

module.exports = countStudents;
