"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var strict_1 = __importDefault(require("node:assert/strict"));
var AppService_1 = __importDefault(require("../services/AppService"));
var test = strict_1.default.deepEqual(typeof AppService_1.default.cleanUp, 'function');
console.log('test', test);
