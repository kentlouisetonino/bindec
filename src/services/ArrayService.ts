export default class ArrayService {
  // This method will converts strings to array of numbers.
  static stringToNumberArray(input: string): number[] {
    return input.split('').map((num) => Number(num));
  }
}
