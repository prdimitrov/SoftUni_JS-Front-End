// Write a function that receives an array and the number of rotations 
// you have to perform. 
// Note: Depending on the number of rotations, 
// the first element goes to the end.

function rotateArray(arr, rotations) {
    for (i = 0; i < rotations; i++) {
        let firstNumber = arr.shift();
        arr.reverse;
        arr.push(firstNumber);
    }
    console.log(arr.join(' '));
}


rotateArray([51, 47, 32, 61, 21], 2);
rotateArray([32, 21, 61, 1], 4);
rotateArray([2, 4, 15, 31], 5);