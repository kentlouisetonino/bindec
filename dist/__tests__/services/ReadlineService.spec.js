"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadlineService_1 = require("../../services/ReadlineService");
describe('/services/ReadlineService.ts', function () {
    test('b. invalidBinaryInput method should check if a valid binary.', function (done) {
        var invalidBinaryTest = ReadlineService_1.default.invalidBinaryInput('12345');
        var validBinaryTest = ReadlineService_1.default.invalidBinaryInput('1111');
        expect(invalidBinaryTest).toBeTruthy();
        expect(validBinaryTest).toBeFalsy();
        done();
    });
    test('c. invalidDecimalInput method should check if decimal is correct', function (done) {
        var invalidDecimal = ReadlineService_1.default.invalidDecimalInput('a112312');
        var validDecimal = ReadlineService_1.default.invalidDecimalInput('123');
        expect(invalidDecimal).toBeTruthy();
        expect(validDecimal).toBeFalsy();
        done();
    });
});
