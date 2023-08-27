import ConversionService from '../../services/ConversionService';

describe('/services/ConversionService.ts', () => {
  test('a. binaryToDecimal method should return the right value.', (done) => {
    const binaryToDecimalTest = ConversionService.binaryToDecimal('1011');
    expect(binaryToDecimalTest).toEqual(11);
    done();
  });

  test('b. decimalToBinary method should return the right value.', (done) => {
    const decimalToBinaryTest = ConversionService.decimalToBinary('11');
    expect(decimalToBinaryTest).toEqual(1011);
    done();
  });
});
