// Ctrl + F5, за да изберем къде да изпълним файла!

// Declare variables
let a = 10;
let b = 20;

var c = 30; // Before ES2015 - not recommended to use (var)
// Да си използваме let, var вече не се използва.
console.log(a + b);

const pi = 3.14; // Constant variable

// Condition Statements

if (a < 10) {
    console.log('a is lower than 10');
} else if (a < 20) {
    console.log('a is lower than 20');
} else {
    console.log('a is higher than or equal to 20');
}

// Function declaration
function add(first, second) {
    console.log(first + second);
}

// Function invocation
add(1, pi);

// Console print with string concatenation
console.log('The number pi is: ' + pi + '!');

// String interpolation / template literal

console.log(`The number pi is: ${pi}!!`);

// Fix the number output
console.log(pi.toFixed(9)); //до 9-тия знак след десетичната запетая

// Single vs double quotes for strings
console.log("mr" + 'Pesho');
console.log("Gosho");
console.log('Gosho: k\'vo staa');
console.log('k"vot lqga');

// Rounding vs toFixed
console.log(pi.toFixed(5));
console.log(Math.round(pi));

// The seven primitive data types
/*
Boolean
null
undefined
Number
String
Symbol
BigInt
*/

// 10 / 2 -> 5
// 11 / 5 -> 2.2, няма да върне 2 примерно, като при джавата.
// 11 % 5 -> 1, връща остатък.
// 10 ** 2 -> 10 на ^ 2 -> 10000000000, ** е степенуване.

// Comparison Operators
// console.log(1 == '1'); // true, == е equality
// console.log(1 === '1'); // false, == е identity
// console.log(3 != '3'); // false
// console.log(3 !== '3'); true
// console.log((5 > 7) ? 4 : 10); // 10
// АКО израза от лявата страна на ? е true, върни 4, ако е false, върни 10!

// Switch statement
const name = 'pesho';
switch (name) {
    case 'gosho':
        console.log('zdrasti gosho');
        break;
    case 'pesho':
        console.log('maraba pesho');
        break;
    default:
        console.log('koi si ti?');
        break;
}

// logical operators
/*
! NOT
&& AND
|| OR
*/
// !true === false :D :D :D 

// typeof operator
/*
const val = 5;
console.log(typeof val); // number
*/

// ВАЖНО!!!!
// ВАЖНО!!!!
// Truthy and Falsy Values
// truthy - a value that coerces to true when evaluated in a boolean context
// The vollowing values are 'falsy', - false, null, undefined, Nan, 0, 0n
// and ""

if (name) {
    console.log('There is pesho');
} else {
    console.log('There is no pesho');
}

const name2 = '';

if (name2) {
    console.log('There is pesho');
} else {
    console.log('There is no pesho');
}

// For loop
/*
for (let i = 0; i < 10; i++) {
    console.log(i);
}
*/

// While loop
/*
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
*/

/* // Имаме и тези оператори
+=
-=
*=
/=
%=
**=
*/

// Undefined
let futureValue;
console.log(futureValue);

