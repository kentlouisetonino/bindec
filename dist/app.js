#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppService_1 = require("./services/AppService");
var IOService_1 = require("./services/IOService");
var ConversionService_1 = require("./services/ConversionService");
(function App() {
    return __awaiter(this, void 0, void 0, function () {
        var io, optionInput, binaryInput, invalidBinaryInput, decimalResult, decimalInput, invalidDecimalInput, binaryResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    io = IOService_1.default.instance();
                    // Initial display.
                    AppService_1.default.cleanUp();
                    AppService_1.default.description();
                    AppService_1.default.newline();
                    AppService_1.default.options();
                    // Get the option input.
                    AppService_1.default.newline();
                    return [4 /*yield*/, io.question('Option: ')];
                case 1:
                    optionInput = _a.sent();
                    _a.label = 2;
                case 2:
                    if (!(Number(optionInput) !== 1 && Number(optionInput) !== 2)) return [3 /*break*/, 4];
                    AppService_1.default.cleanUp();
                    AppService_1.default.description();
                    AppService_1.default.newline();
                    AppService_1.default.invalidOption('Invalid input. Please try again.');
                    AppService_1.default.newline();
                    AppService_1.default.options();
                    AppService_1.default.newline();
                    return [4 /*yield*/, io.question('Option: ')];
                case 3:
                    // Ask the input again.
                    optionInput = _a.sent();
                    return [3 /*break*/, 2];
                case 4:
                    if (!(Number(optionInput) === 1)) return [3 /*break*/, 9];
                    // Refresh the display.
                    AppService_1.default.cleanUp();
                    AppService_1.default.description();
                    AppService_1.default.newline();
                    binaryInput = void 0;
                    invalidBinaryInput = void 0;
                    decimalResult = void 0;
                    return [4 /*yield*/, io.question('Binary: ')];
                case 5:
                    // Get the binary input.
                    binaryInput = _a.sent();
                    // Check if valid binary input.
                    invalidBinaryInput = IOService_1.default.invalidBinaryInput(binaryInput);
                    _a.label = 6;
                case 6:
                    if (!invalidBinaryInput) return [3 /*break*/, 8];
                    AppService_1.default.cleanUp();
                    AppService_1.default.description();
                    AppService_1.default.newline();
                    AppService_1.default.invalidOption('Invalid binary input. Please try again.');
                    AppService_1.default.newline();
                    return [4 /*yield*/, io.question('Binary: ')];
                case 7:
                    // Ask binary input again.
                    binaryInput = _a.sent();
                    // Check again if valid binary input.
                    invalidBinaryInput = IOService_1.default.invalidBinaryInput(binaryInput);
                    if (invalidBinaryInput) {
                        return [3 /*break*/, 6];
                    }
                    // Convert the binary input to decimal numbers.
                    decimalResult = ConversionService_1.default.binaryToDecimal(binaryInput);
                    return [3 /*break*/, 6];
                case 8:
                    if (!decimalResult) {
                        // Convert the binary input to deccimall numbers if no results yet.
                        decimalResult = ConversionService_1.default.binaryToDecimal(binaryInput);
                    }
                    // Display the result.
                    AppService_1.default.result('Decimal', decimalResult);
                    _a.label = 9;
                case 9:
                    if (!(Number(optionInput) === 2)) return [3 /*break*/, 14];
                    AppService_1.default.cleanUp();
                    AppService_1.default.description();
                    AppService_1.default.newline();
                    decimalInput = void 0;
                    invalidDecimalInput = void 0;
                    binaryResult = void 0;
                    return [4 /*yield*/, io.question('Decimal: ')];
                case 10:
                    // Ge the decimal input.
                    decimalInput = _a.sent();
                    // Check if valid decimal input.
                    invalidDecimalInput = IOService_1.default.invalidDecimalInput(decimalInput);
                    _a.label = 11;
                case 11:
                    if (!invalidDecimalInput) return [3 /*break*/, 13];
                    AppService_1.default.cleanUp();
                    AppService_1.default.description();
                    AppService_1.default.newline();
                    AppService_1.default.invalidOption('Invalid decimal input. Please try again.');
                    AppService_1.default.newline();
                    return [4 /*yield*/, io.question('Decimal: ')];
                case 12:
                    // Ask again the decimal input.
                    decimalInput = _a.sent();
                    // Check again if valid decimal input.
                    invalidDecimalInput = IOService_1.default.invalidDecimalInput(decimalInput);
                    if (invalidDecimalInput) {
                        return [3 /*break*/, 11];
                    }
                    // Convert the decimal input to binary numbers.
                    binaryResult = ConversionService_1.default.decimalToBinary(decimalInput);
                    return [3 /*break*/, 11];
                case 13:
                    if (!binaryResult) {
                        // Converts decimal input to binary numbers if no result yet.
                        binaryResult = ConversionService_1.default.decimalToBinary(decimalInput);
                    }
                    // Display the result.
                    AppService_1.default.result('Binary', binaryResult);
                    _a.label = 14;
                case 14:
                    AppService_1.default.newline();
                    io.close();
                    return [2 /*return*/];
            }
        });
    });
})();
