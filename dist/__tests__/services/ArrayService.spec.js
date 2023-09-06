"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayService_1 = require("../../services/ArrayService");
describe('/services/ArrayService.ts', function () {
    test('a. stringToNUmberArray method should return correct array of numbers', function (done) {
        var stringToNumberArrayTest = ArrayService_1.default.stringToNumberArray('1111');
        expect(stringToNumberArrayTest).toEqual([1, 1, 1, 1]);
        done();
    });
});
