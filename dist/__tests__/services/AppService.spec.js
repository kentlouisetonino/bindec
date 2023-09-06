"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppService_1 = require("../../services/AppService");
describe('/services/AppService.ts', function () {
    test('a. cleanUp method should return undefined.', function (done) {
        var cleanUpTest = AppService_1.default.cleanUp();
        expect(cleanUpTest).toBe(undefined);
        done();
    });
    test('b. newline method should return undefined', function (done) {
        var newlineTest = AppService_1.default.newline();
        expect(newlineTest).toBe(undefined);
        done();
    });
    test('c. description method should return undefined', function (done) {
        var descriptionTest = AppService_1.default.description();
        expect(descriptionTest).toBe(undefined);
        done();
    });
    test('d. options method should return undefined.', function (done) {
        var optionsTest = AppService_1.default.options();
        expect(optionsTest).toBe(undefined);
        done();
    });
    test('e. invalidOption method should return undefined.', function (done) {
        var invalidOptionTest = AppService_1.default.invalidOption('Testing.');
        expect(invalidOptionTest).toBe(undefined);
        done();
    });
    test('f. result method should return undefined', function (done) {
        var resultTest = AppService_1.default.result('Decimal', 7);
        expect(resultTest).toBe(undefined);
        done();
    });
});
