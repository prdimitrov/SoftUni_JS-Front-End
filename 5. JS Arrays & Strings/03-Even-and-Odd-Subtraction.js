// Write a program that calculates the difference between 
// the sum of the even and 
// the sum of the odd numbers in an array.

function evenOddSubtraction(numberArr) {
    let even = 0;
    let odd = 0;
    numberArr.forEach(number => {
        if (number % 2 === 0) {
            even += number;
        } else {
            odd += number;
        }
    });
    console.log(even - odd);
}

evenOddSubtraction([1, 2, 3, 4, 5, 6]);
evenOddSubtraction([3, 5, 7, 9]);
evenOddSubtraction([2, 4, 6, 8, 10]);