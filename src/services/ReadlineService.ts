export default class ReadlineService {
  // This method check if the binary input is a valid binary numbers.
  static invalidBinaryInput(input: string) {
    if (isNaN(Number(input))) {
      return true;
    }

    const regex = /[2-9]/;

    return regex.test(input);
  }

  // This method check if the decimal input is a valid numbers.
  static invalidDecimalInput(input: string) {
    if (isNaN(Number(input))) {
      return true;
    }

    return false;
  }
}
