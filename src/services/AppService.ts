export default class AppService {
  // Clean up the terminal before running any process.
  static cleanUp() {
    console.clear();
  }

  // Display the description of the app.
  static description() {
    console.log(' -------------------------------------------- ');
    console.log('|                                            |');
    console.log('|                   BINDEC                   |');
    console.log('|                                            |');
    console.log('|   A CLI application that converts binary   |');
    console.log('| numbers to decimal numbers and vice versa. |');
    console.log('|                                            |');
    console.log('|____________________________________________|');
  }
}
