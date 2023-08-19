import AppService from './services/AppService';
import IOService from './services/IOService';

(async function App() {
  // Readline instance.
  const io = IOService.instance();

  // Initial display.
  AppService.cleanUp();
  AppService.description();
  AppService.newline();
  AppService.options();

  // Variables.
  let optionInput: string;

  // Get the option input.
  AppService.newline();
  optionInput = await io.question('Option: ');

  // Binary to Decimal computation.
  if (Number(optionInput) === 1) {
    // Refresh the display.
    AppService.cleanUp();
    AppService.description();
    AppService.newline();

    // Variables.
    let binaryInput: string;

    // Get the binary numbers input.
    binaryInput = await io.question('Binary Value: ');

    // Process the input.
    const binaryArray = binaryInput.split('').map((num) => Number(num));
    const reversedBinaryArray = binaryArray.reverse();

    let decimalValue = 0;
    const maximumMultiple = 2 ** (binaryArray.length - 1);
    let multipleArray = [1];

    for (let i = 2; i <= maximumMultiple; i += i) {
      multipleArray.push(i);
    }

    for (let i = 0; i < reversedBinaryArray.length; i++) {
      decimalValue += reversedBinaryArray[i] * multipleArray[i];
    }

    console.log('Decimal Value: ', decimalValue);
    AppService.newline();
    console.log('Thank you for using this App.');
  }

  io.close();
})();
