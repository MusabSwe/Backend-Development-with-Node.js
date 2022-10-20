// const arrays = require('./utilities/arrays');
// const numbers = require('./utilities/numbers');
// const strings = require('./utilities/strings');
// import arrays from "./utilities/arrays";
// import numbers from './utilities/numbers'; //Nodejs use commonjs in the modules and commonjs use require& module.export
// import strings from './utilities/strings'; //However ES6 use import export


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

// const numArr: number[] = [3, 4, 5, 6];
// const wordArr: string[] = ['cat', 'dog', 'rabbit', 'bird'];
// const arrSum = arrays.addArr(numArr);
// const mixArr = arrays.concatArr(numArr, wordArr);
// const myNum = ('15' as unknown) as number % 2;

// results of function calls
// console.log(arrays.cut3(mixArr));
// console.log(numbers.sum(arrSum, myNum));
// console.log(strings.capitalize('the quick brown fox'));
// console.log(numbers.multiply(('5' as unknown) as number, 8));
// console.log(arrays.lgNum((mixArr as unknown) as number[]));

// Promise Chaining VS Async/Await Example in TS
const step1 = (): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = 1;
                console.log("completed step 1");
                resolve(nextStep);
            } catch (error) {
                reject()
            }
        }, 1000);
    });
};

const step2 = (step: unknown): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = (step as number) + 1;
                console.log(`completed step ${nextStep}`);
                resolve(nextStep);
            } catch (error) {
                reject()
            }
        }, 1000);
    });
};

const step3 = (step: unknown): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                const nextStep = (step as number) + 1;
                console.log(`completed step ${nextStep}`);
                resolve(nextStep);
            } catch (error) {
                reject()
            }
        }, 1000);
    });
};

step1()
.then((result: number) => {
    return step2(result);
})
.then((result: number) => {
    return step3(result);
})
.then(() => {
    console.log("your house is done");
})
.catch(() => {
    console.log('there was an error building');
}); 