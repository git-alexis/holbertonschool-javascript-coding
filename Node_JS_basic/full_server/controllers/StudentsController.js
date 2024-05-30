import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const students = await readDatabase(process.argv[2]);
      const message = ['This is the list of our students'];

      Object.keys(students).sort().forEach((field) => {
        message.push(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      });

      response.status(200).write(message.join('\n'));
    } catch (error) {
      response.status(500).write('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).write('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(process.argv[2]);
      response.status(200).write(`List: ${students[major].join(', ')}`);
    } catch (error) {
      response.status(500).write('Cannot load the database');
    }
  }
}

export default StudentsController;
