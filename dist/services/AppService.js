"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppService = /** @class */ (function () {
    function AppService() {
    }
    // Clean up the terminal before running any process.
    AppService.cleanUp = function () {
        console.clear();
    };
    // Display the description of the app.
    AppService.description = function () {
        console.log(' -------------------------------------------- ');
        console.log('|                                            |');
        console.log('|                   BINDEC                   |');
        console.log('|                                            |');
        console.log('|   A CLI application that converts binary   |');
        console.log('| numbers to decimal numbers and vice versa. |');
        console.log('|                                            |');
        console.log('|____________________________________________|');
    };
    return AppService;
}());
exports.default = AppService;
