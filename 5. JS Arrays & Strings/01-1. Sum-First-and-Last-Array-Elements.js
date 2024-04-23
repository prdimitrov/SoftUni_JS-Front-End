// Write a function that receives an array of numbers and 
// prints the sum of the first and last element in that array.

/*
function solve(numberArr) {
    let first=numberArr[0];
    let last=numberArr[numberArr.length - 1];
    console.log(first+last);
}
*/

function solve(numberArr) {
    console.log(numberArr[0] + numberArr[numberArr.length - 1]);
}

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);