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

    const binaryInput = await io.question('Binary Value: ');
    const decimalEquivalent = ConversionService.binaryToDecimal(binaryInput);

    console.log('Decimal Value: ', decimalEquivalent);
    AppService.newline();
    console.log('Thank you for using this App.');
  }

  io.close();
})();
