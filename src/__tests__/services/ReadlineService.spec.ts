import ReadlineService from '../../services/ReadlineService';

describe('/services/ReadlineService.ts', () => {
  test('b. invalidBinaryInput method should check if a valid binary.', (done) => {
    const invalidBinaryTest = ReadlineService.invalidBinaryInput('12345');
    const validBinaryTest = ReadlineService.invalidBinaryInput('1111');
    expect(invalidBinaryTest).toBeTruthy();
    expect(validBinaryTest).toBeFalsy();
    done();
  });

  test('c. invalidDecimalInput method should check if decimal is correct', (done) => {
    const invalidDecimal = ReadlineService.invalidDecimalInput('a112312');
    const validDecimal = ReadlineService.invalidDecimalInput('123');
    expect(invalidDecimal).toBeTruthy();
    expect(validDecimal).toBeFalsy();
    done();
  });
});
