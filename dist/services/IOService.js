"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("node:readline/promises");
var node_process_1 = require("node:process");
var IOService = /** @class */ (function () {
    function IOService() {
    }
    // This methid create an instance of the readline interface.
    IOService.instance = function () {
        return readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
    };
    // This method check if the binary input is a valid binary numbers.
    IOService.invalidBinaryInput = function (input) {
        if (isNaN(Number(input))) {
            return true;
        }
        var regex = /[2-9]/;
        return regex.test(input);
    };
    // This method check if the decimal input is a valid numbers.
    IOService.invalidDecimalInput = function (input) {
        if (isNaN(Number(input))) {
            return true;
        }
        return false;
    };
    return IOService;
}());
exports.default = IOService;
