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

    // Get the binary input.
    const binaryInput = await io.question('Binary: ');
    const decimalEquivalent = ConversionService.binaryToDecimal(binaryInput);

    console.log('Decimal: ', decimalEquivalent);

    AppService.newline();
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

  console.log('Thank you for using this app.');

  io.close();
})();
