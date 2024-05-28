const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter(Boolean);

    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fieldCounts = students.reduce((counts, line) => {
      const field = line.split(',')[3];

      if (!counts[field]) {
        counts[field] = { count: 0, names: [] };
      }

      counts[field].count += 1;
      counts[field].names.push(line.split(',')[0]);

      return counts;
    }, {});

    for (const field in fieldCounts) {
      console.log(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${fieldCounts[field].names.join(', ')}`);
    }

  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
