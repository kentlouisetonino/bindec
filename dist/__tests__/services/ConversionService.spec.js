"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConversionService_1 = require("../../services/ConversionService");
describe('/services/ConversionService.ts', function () {
    test('a. binaryToDecimal method should return the right value.', function (done) {
        var binaryToDecimalTest = ConversionService_1.default.binaryToDecimal('1011');
        expect(binaryToDecimalTest).toEqual(11);
        done();
    });
    test('b. decimalToBinary method should return the right value.', function (done) {
        var decimalToBinaryTest = ConversionService_1.default.decimalToBinary('11');
        expect(decimalToBinaryTest).toEqual(1011);
        done();
    });
});
