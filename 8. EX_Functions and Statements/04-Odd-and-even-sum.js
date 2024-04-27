function solve(number) {
    // Extract odd and even digits
    const evenSum = calculateDigitSum(number, x => x % 2 === 0);
    const oddSum = calculateDigitSum(number, x => x % 2 !== 0);
    function calculateDigitSum(number, filter) {
        // get digit array
        const filteredDigits = number
            .toString()
            .split('')
            // .map(digit => Number(digit));
            .map(Number)
            .filter(filter);

        // calculate sum
        const sum = filteredDigits.reduce((acc, digit) => acc + digit, 0);

        return sum;
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

solve(1000435);
solve(3495892137259234);