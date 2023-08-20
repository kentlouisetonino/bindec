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
  static decimalToBinary(decimalInput: string) {
    const decimalNumber = Number(decimalInput);

    const binaryArray: number[] = [];
    let currentNumber: number = Number(decimalInput);

    while (Math.floor(currentNumber / 2) !== 0) {
      binaryArray.push(currentNumber % 2);
      currentNumber = Math.floor(currentNumber / 2);
    }

    if (currentNumber === 1) {
      binaryArray.push(currentNumber % 2);
    }

    const reversedBinaryArray = binaryArray.reverse();

    return Number(reversedBinaryArray.join(''));
  }
}
