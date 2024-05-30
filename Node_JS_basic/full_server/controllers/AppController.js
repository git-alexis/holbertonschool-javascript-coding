class AppController {
  static getHomepage(request, response) {
    response.status(200).write('Hello Holberton School!');
  }
}

export default AppController;
