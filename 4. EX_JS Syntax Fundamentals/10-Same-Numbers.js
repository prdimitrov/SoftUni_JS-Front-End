// Write a function that takes an integer number as an input and check 
// if all the digits in a given number are the same or not.
// Print on the console true if all numbers are the same and false if not. 
// On the next line print the sum of all digits.
// The input comes as an integer number.
// The output should be printed on the console.

function sameNumbers(number) {
    const numbersString = number.toString();
    const firstNumber = numbersString[0];
    let trueOrFalse = true;
    let sum = 0;
    for (let i = 0; i < numbersString.length; i++) {
        if (numbersString[i] !== firstNumber) {
            trueOrFalse = false;
        }
        sum += parseInt(numbersString[i]);
    }
    console.log(trueOrFalse);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);