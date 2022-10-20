"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const arrays = require('./utilities/arrays');
// const numbers = require('./utilities/numbers');
// const strings = require('./utilities/strings');
var arrays_1 = __importDefault(require("./utilities/arrays"));
var numbers_1 = __importDefault(require("./utilities/numbers")); //Nodejs use commonjs in the modules and commonjs use require& module.export
var strings_1 = __importDefault(require("./utilities/strings")); //However ES6 use import export
// const a = 4;
// const b = 6;
// const c = ('5' as unknown) as number;
// const d = ('cat' as unknown) as number;
// const multiply = (num1: number, num2: number) => {
//     console.log(`${num1} * ${num2} =`, num1 * num2);
// }
// const add = (num1: number, num2: number) => {
//     console.log(`${num1} + ${num2} =`, num1 * num2);
// }
// multiply(a, b);
// multiply(a, c);
// multiply(a, d);
// add(a, b)
// add(a, c)
// add(a, d)
// // Arrays examples in TS
// const myArr1: number[] = [1, 2, 3];
// // Arrays withe different values of different types
// const arr: (number | string)[] = [1, 2, 3, 'a'];
// console.log('Different type array: ', arr)
// console.log('Same type array: ', myArr1);
// // Tuples  Ex
// const student: [string, number, string, string] = ['Ali', 30, 'Managment', 'Business school']
// console.log(student);
// // Enum
// enum Compass { North = "North", South = "South", East = "East", West = "West" };
// const move = (dist: number, direction: Compass) => {
//     return `walk ${dist} paces ${direction}`;
// }
// console.log(move(10, Compass.East));
// NOTE: This code has not been converted to TypeScript yet
// Task convert JavaScript code to TypeScript code
var numArr = [3, 4, 5, 6];
var wordArr = ['cat', 'dog', 'rabbit', 'bird'];
var arrSum = arrays_1.default.addArr(numArr);
var mixArr = arrays_1.default.concatArr(numArr, wordArr);
var myNum = '15' % 2;
// results of function calls
console.log(arrays_1.default.cut3(mixArr));
console.log(numbers_1.default.sum(arrSum, myNum));
console.log(strings_1.default.capitalize('the quick brown fox'));
console.log(numbers_1.default.multiply('5', 8));
console.log(arrays_1.default.lgNum(mixArr));
