// function solve(a, b, c) {
//     function mathMin(numbers) {
//         let minNumber = Number.MAX_SAFE_INTEGER;
    
//         for (const number of numbers) {
//             if (minNumber > number) {
//                 minNumber = number;
//             }
//         }
//         return minNumber;
//     }
//     const result = mathMin([a, b, c]);
// console.log(result);
// }

// function solve(...numbers) {
//     const result = mathMin(numbers);
    
//     console.log(result);

//     function mathMin(numbers) {
//         let minNumber = Number.MAX_SAFE_INTEGER;
    
//         for (const number of numbers) {
//             if (minNumber > number) {
//                 minNumber = number;
//             }
//         }
//         return minNumber;
//     }
// }

function solve(...numbers) {
    const result = defaultMathMin(numbers);
    function defaultMathMin(numbers) {
        return Math.min(...numbers);
    }
    console.log(result);
}


solve(2,
    5,
    3
);
solve(600,
    342,
    123
);
solve(25,
    21,
    4
);
solve(2,
    2,
    2
);