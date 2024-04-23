// Write a function, which will be given a single number. Your task is to find the sum of its digits.
function sumDigits(inputNumber) {
    let sum = 0;
    let numberString = inputNumber.toString();
    for (let i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i]);
    }
    console.log(sum);
}


sumDigits(245678);
sumDigits(97561);
sumDigits(543);