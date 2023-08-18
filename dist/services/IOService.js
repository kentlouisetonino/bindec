"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("node:readline/promises");
var node_process_1 = require("node:process");
var IOService = /** @class */ (function () {
    function IOService() {
    }
    // Create an instance of the readline interface.
    IOService.instance = function () {
        return readline.createInterface({ input: node_process_1.stdin, output: node_process_1.stdout });
    };
    return IOService;
}());
exports.default = IOService;
