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

      // Check again if valid binary input.
      invalidBinaryInput = IOService.invalidBinaryInput(binaryInput);

      if (invalidBinaryInput) {
        continue;
      }

      // Convert the binary input to decimal numbers.
      const decimal = ConversionService.binaryToDecimal(binaryInput);

      // Display result.
      AppService.result('Decimal', decimal);
    }
  }

  if (Number(optionInput) === 2) {
    AppService.cleanUp();
    AppService.description();
    AppService.newline();

    // Necessary variables.
    let decimalInput: string;
    let invalidDecimalInput: boolean;

    // Ge the decimal input.
    decimalInput = await io.question('Decimal: ');

    // Check if valid decimal input.
    invalidDecimalInput = IOService.invalidDecimalInput(decimalInput);

    while (invalidDecimalInput) {
      AppService.cleanUp();
      AppService.description();
      AppService.newline();
      AppService.invalidOption('Invalid decimal input. Please try again.');
      AppService.newline();

      // Ask again the decimal input.
      decimalInput = await io.question('Decimal: ');

      // Check again if valid decimal input.
      invalidDecimalInput = IOService.invalidDecimalInput(decimalInput);

      if (invalidDecimalInput) {
        continue;
      }

      // Convert the decimal input to binary numbers.
      const binary = ConversionService.decimalToBinary(decimalInput);

      // Display the result.
      AppService.result('Binary', binary);
    }
  }

  AppService.newline();
  io.close();
})();
