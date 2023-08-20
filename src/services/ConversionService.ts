import ArrayService from './ArrayService';

export default class ConversionService {
  // This methods converts binary numbers to decimal numbers.
  static binaryToDecimal(binaryInput: string): number {
    const binaryArray = ArrayService.stringToNumberArray(binaryInput);
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

    return decimalValue;
  }

  // This method converts decimal numbers to binary numbers.
  static decimalToBinary() {}
}
