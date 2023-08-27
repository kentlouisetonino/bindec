import AppService from '../../services/AppService';

describe('/services/AppService.ts', () => {
  test('a. cleanUp method should return undefined.', (done) => {
    const cleanUpTest = AppService.cleanUp();
    expect(cleanUpTest).toBe(undefined);
    done();
  });

  test('b. newline method should return undefined', (done) => {
    const newlineTest = AppService.newline();
    expect(newlineTest).toBe(undefined);
    done();
  });

  test('c. description method should return undefined', (done) => {
    const descriptionTest = AppService.description();
    expect(descriptionTest).toBe(undefined);
    done();
  });

  test('d. options method should return undefined.', (done) => {
    const optionsTest = AppService.options();
    expect(optionsTest).toBe(undefined);
    done();
  });

  test('e. invalidOption method should return undefined.', (done) => {
    const invalidOptionTest = AppService.invalidOption('Testing.');
    expect(invalidOptionTest).toBe(undefined);
    done();
  });

  test('f. result method should return undefined', (done) => {
    const resultTest = AppService.result('Decimal', 7);
    expect(resultTest).toBe(undefined);
    done();
  });
});
