// function printAndSum(num1, num2) {
//     let sum = 0;
//     let output = '';
//     for (let i = num1; i <= num2; i++) {
//         output += i + ' ';
//         sum += i;
//     }
//     console.log(output.trim());
//     console.log(`Sum: ${sum}`);
// }

function printAndSum(num1, num2) {
    let sum = 0;
    let numbers = [];
    for (let i = num1; i <= num2; i++) {
        numbers.push(i);
        sum += i;
    }
    console.log(numbers.join(' '));
    console.log(`Sum: ${sum}`);
}


printAndSum(5, 10);