"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("node:readline/promises");
var IOService_1 = require("../../services/IOService");
describe('/services/IOService.ts', function () {
    test('a. instance method should return the right interface.', function (done) {
        var instanceTest = IOService_1.default.instance();
        expect(instanceTest).toBeInstanceOf(readline.Interface);
        done();
    });
    test('b. invalidBinaryInput method should check if a valid binary.', function (done) {
        var invalidBinaryTest = IOService_1.default.invalidBinaryInput('12345');
        var validBinaryTest = IOService_1.default.invalidBinaryInput('1111');
        expect(invalidBinaryTest).toBeTruthy();
        expect(validBinaryTest).toBeFalsy();
        done();
    });
    test('c. invalidDecimalInput method should check if decimal is correct', function (done) {
        var invalidDecimal = IOService_1.default.invalidDecimalInput('a112312');
        var validDecimal = IOService_1.default.invalidDecimalInput('123');
        expect(invalidDecimal).toBeTruthy();
        expect(validDecimal).toBeFalsy();
        done();
    });
});
