import fs from 'fs';

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    try {
      const data = fs.readFile(filePath, 'utf-8');
      const lines = data.split('\n').filter(Boolean);
      const students = lines.slice(1).map((line) => line.split(','));
      const fields = {};

      for (const student of students) {
        const [firstname, , , field] = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      }

      resolve(fields);
    } catch (error) {
      reject(new Error('Cannot load the database'));
    }
  });
}

export default readDatabase;
