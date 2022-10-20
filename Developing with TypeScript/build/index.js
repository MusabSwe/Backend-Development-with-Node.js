"use strict";
var a = 4;
var b = 6;
var c = '5';
var d = 'cat';
var multiply = function (num1, num2) {
    console.log("".concat(num1, " * ").concat(num2, " ="), num1 * num2);
};
var add = function (num1, num2) {
    console.log("".concat(num1, " + ").concat(num2, " ="), num1 * num2);
};
multiply(a, b);
multiply(a, c);
multiply(a, d);
add(a, b);
add(a, c);
add(a, d);
// Arrays examples in TS
var myArr1 = [1, 2, 3];
// Arrays withe different values of different types
var arr = [1, 2, 3, 'a'];
console.log('Different type array: ', arr);
console.log('Same type array: ', myArr1);
// Tuples  Ex
var student = ['Ali', 30, 'Managment', 'Business school'];
