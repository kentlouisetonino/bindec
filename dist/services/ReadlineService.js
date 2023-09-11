"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReadlineService = /** @class */ (function () {
    function ReadlineService() {
    }
    // This method check if the binary input is a valid binary numbers.
    ReadlineService.invalidBinaryInput = function (input) {
        if (isNaN(Number(input))) {
            return true;
        }
        var regex = /[2-9]/;
        return regex.test(input);
    };
    // This method check if the decimal input is a valid numbers.
    ReadlineService.invalidDecimalInput = function (input) {
        if (isNaN(Number(input))) {
            return true;
        }
        return false;
    };
    return ReadlineService;
}());
exports.default = ReadlineService;
