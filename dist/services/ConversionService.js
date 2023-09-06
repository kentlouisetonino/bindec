"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayService_1 = require("./ArrayService");
var ConversionService = /** @class */ (function () {
    function ConversionService() {
    }
    // This methods converts binary numbers to decimal numbers.
    ConversionService.binaryToDecimal = function (binaryInput) {
        var binaryArray = ArrayService_1.default.stringToNumberArray(binaryInput);
        var reversedBinaryArray = binaryArray.reverse();
        var decimalValue = 0;
        var maximumMultiple = Math.pow(2, (binaryArray.length - 1));
        var multipleArray = [1];
        for (var i = 2; i <= maximumMultiple; i += i) {
            multipleArray.push(i);
        }
        for (var i = 0; i < reversedBinaryArray.length; i++) {
            decimalValue += reversedBinaryArray[i] * multipleArray[i];
        }
        return decimalValue;
    };
    // This method converts decimal numbers to binary numbers.
    ConversionService.decimalToBinary = function (decimalInput) {
        var decimalNumber = Number(decimalInput);
        var binaryArray = [];
        var currentNumber = Number(decimalInput);
        while (Math.floor(currentNumber / 2) !== 0) {
            binaryArray.push(currentNumber % 2);
            currentNumber = Math.floor(currentNumber / 2);
        }
        if (currentNumber === 1) {
            binaryArray.push(currentNumber % 2);
        }
        var reversedBinaryArray = binaryArray.reverse();
        return Number(reversedBinaryArray.join(''));
    };
    return ConversionService;
}());
exports.default = ConversionService;
