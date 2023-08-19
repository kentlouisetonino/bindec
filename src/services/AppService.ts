export default class AppService {
  // This method clean up the terminal before running any process.
  static cleanUp() {
    console.clear();
  }

  // This method add a newline.
  static newline() {
    console.log('\n');
  }

  // This method display the description of the app.
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

  // This method allows user to choose an option.
  static options() {
    console.log('Please input only the number (1 | 2) option:');
    console.log('(1) Binary to Decimal');
    console.log('(2) Decimal to Binary');
  }
}
