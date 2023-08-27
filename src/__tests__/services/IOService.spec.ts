import * as readline from 'node:readline/promises';
import IOService from '../../services/IOService';

describe('/services/IOService.ts', () => {
  test('a. instance method should return the right interface.', (done) => {
    const instanceTest = IOService.instance();
    expect(instanceTest).toBeInstanceOf(readline.Interface);
    done();
  });

  test("b. invalidBinaryInput method should check if a valid binary.", (done) => {
    const invalidBinaryTest = IOService.invalidBinaryInput("12345")
    const validBinaryTest = IOService.invalidBinaryInput("1111")
    expect(invalidBinaryTest).toBeTruthy()
    expect(validBinaryTest).toBeFalsy()
    done()
  })

  test("c. invalidDecimalInput method should check if decimal is correct", (done) => {
    const invalidDecimal = IOService.invalidDecimalInput("a112312")
    const validDecimal = IOService.invalidDecimalInput("123")
    expect(invalidDecimal).toBeTruthy()
    expect(validDecimal).toBeFalsy()
    done()
  })
});
