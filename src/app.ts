#! /usr/bin/env node
import IOService from 'npm-ioservice';
import AppService from './services/AppService';
import ConversionService from './services/ConversionService';
import ReadlineService from './services/ReadlineService';

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
    let decimalResult: number;

    // Get the binary input.
    binaryInput = await io.question('Binary: ');

    // Check if valid binary input.
    invalidBinaryInput = ReadlineService.invalidBinaryInput(binaryInput);

    while (invalidBinaryInput) {
      AppService.cleanUp();
      AppService.description();
      AppService.newline();
      AppService.invalidOption('Invalid binary input. Please try again.');
      AppService.newline();

      // Ask binary input again.
      binaryInput = await io.question('Binary: ');

      // Check again if valid binary input.
      invalidBinaryInput = ReadlineService.invalidBinaryInput(binaryInput);

      if (invalidBinaryInput) {
        continue;
      }

      // Convert the binary input to decimal numbers.
      decimalResult = ConversionService.binaryToDecimal(binaryInput);
    }

    if (!decimalResult) {
      // Convert the binary input to deccimall numbers if no results yet.
      decimalResult = ConversionService.binaryToDecimal(binaryInput);
    }

    // Display the result.
    AppService.result('Decimal', decimalResult);
  }

  if (Number(optionInput) === 2) {
    AppService.cleanUp();
    AppService.description();
    AppService.newline();

    // Necessary variables.
    let decimalInput: string;
    let invalidDecimalInput: boolean;
    let binaryResult: number;

    // Ge the decimal input.
    decimalInput = await io.question('Decimal: ');

    // Check if valid decimal input.
    invalidDecimalInput = ReadlineService.invalidDecimalInput(decimalInput);

    while (invalidDecimalInput) {
      AppService.cleanUp();
      AppService.description();
      AppService.newline();
      AppService.invalidOption('Invalid decimal input. Please try again.');
      AppService.newline();

      // Ask again the decimal input.
      decimalInput = await io.question('Decimal: ');

      // Check again if valid decimal input.
      invalidDecimalInput = ReadlineService.invalidDecimalInput(decimalInput);

      if (invalidDecimalInput) {
        continue;
      }

      // Convert the decimal input to binary numbers.
      binaryResult = ConversionService.decimalToBinary(decimalInput);
    }

    if (!binaryResult) {
      // Converts decimal input to binary numbers if no result yet.
      binaryResult = ConversionService.decimalToBinary(decimalInput);
    }

    // Display the result.
    AppService.result('Binary', binaryResult);
  }

  AppService.newline();
  io.close();
})();
