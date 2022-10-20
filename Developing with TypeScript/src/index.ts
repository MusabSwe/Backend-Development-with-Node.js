const a = 4;
const b = 6;
const c = ('5' as unknown) as number;
const d = ('cat' as unknown) as number;

const multiply = (num1: number, num2: number) => {
    console.log(`${num1} * ${num2} =`, num1 * num2);
}

const add = (num1: number, num2: number) => {
    console.log(`${num1} + ${num2} =`, num1 * num2);
}

multiply(a, b);
multiply(a, c);
multiply(a, d);

add(a, b)
add(a, c)
add(a, d)
// Arrays examples in TS
const myArr1: number[] = [1, 2, 3];
// Arrays withe different values of different types
const arr: (number | string)[] = [1, 2, 3, 'a'];
console.log('Different type array: ', arr)
console.log('Same type array: ', myArr1);
// Tuples  Ex
const student: [string, number, string, string] = ['Ali', 30, 'Managment', 'Business school']
console.log(student);
// Enum
enum Compass { North = "North", South = "South", East = "East", West = "West" };
const move = (dist: number, direction: Compass) => {
    return `walk ${dist} paces ${direction}`;
}
console.log(move(10, Compass.East));