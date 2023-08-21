import AppService from './services/AppService';
import IOService from './services/IOService';
import ConversionService from './services/ConversionService';

(async function App() {
  // Readline instance.
  const io = IOService.instance();

  // Initial display.
  AppService.cleanUp();
  AppService.description();
  AppService.newline();
  AppService.options();

  // Variable for option input.
  let optionInput: string;

  // Get the option input.
  AppService.newline();
  optionInput = await io.question('Option: ');

  // Error handling for invalid option.
  while (Number(optionInput) !== 1 && Number(optionInput) !== 2) {
    AppService.cleanUp();
    AppService.description();
    AppService.newline();
    AppService.invalidOption('Invalid input. Please try again.');
    AppService.newline();
    AppService.options();
    AppService.newline();

    // Ask the input again.
    optionInput = await io.question('Option: ');
  }

  // Binary to Decimal computation.
  if (Number(optionInput) === 1) {
    // Refresh the display.
    AppService.cleanUp();
    AppService.description();
    AppService.newline();

    // Necessary variables.
    let binaryInput: string;
    let invalidBinaryInput: boolean;
    let tryAgain: string;

    // Get the binary input.
    binaryInput = await io.question('Binary: ');

    // Check if valid binary input.
    invalidBinaryInput = IOService.invalidBinaryInput(binaryInput);

    while (invalidBinaryInput) {
      AppService.cleanUp();
      AppService.description();
      AppService.newline();
      AppService.invalidOption('Invalid binary input. Please try again.');
      AppService.newline();

      // Ask binary input again.
      binaryInput = await io.question('Binary: ');

      invalidBinaryInput = IOService.invalidBinaryInput(binaryInput);

      if (invalidBinaryInput) {
        continue;
      }

      // Convert the binary input to decimal numbers.
      const decimal = ConversionService.binaryToDecimal(binaryInput);

      // Display result.
      console.log('Decimal: ', decimal);

      // Check if want to try again.
      AppService.newline();
    }
  }

  if (Number(optionInput) === 2) {
    AppService.cleanUp();
    AppService.description();
    AppService.newline();

    const decimalInput = await io.question('Decimal: ');
    const binaryEquivalent = ConversionService.decimalToBinary(decimalInput);

    console.log('Binary: ', binaryEquivalent);

    AppService.newline();
  }

  io.close();
})();
