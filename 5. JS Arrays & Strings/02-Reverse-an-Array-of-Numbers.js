// Write a program, which receives a number n and an array of elements. 
// Your task is to create a new array with n numbers 
// from the original array, reverse it and print its elements 
// on a single line, 
// space-separated.

function reverse(n, numberArr) {
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(numberArr[i]);
    }
    // arr.reverse();
    console.log(arr.reverse().join(' '));
}

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);