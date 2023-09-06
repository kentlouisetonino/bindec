"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayService = /** @class */ (function () {
    function ArrayService() {
    }
    // This method will converts strings to array of numbers.
    ArrayService.stringToNumberArray = function (input) {
        return input.split('').map(function (num) { return Number(num); });
    };
    return ArrayService;
}());
exports.default = ArrayService;
