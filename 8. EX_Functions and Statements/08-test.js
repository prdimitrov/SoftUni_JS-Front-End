function solve(number) {
    const divisors = getDivisors(number);

    const sum = divisors.reduce((a, b) => a + b, 0);

    if (sum === number) {
        console.log('We have a perfect number!');
    } else {
        console.log('It\'s not so perfect.');
    }

    function getDivisors(number) {
        const divisors = [];

        for (let i = number - 1; i >= 0; i--) {
            if (number % i == 0) {
                divisors.push(i);
            }
        }

        return divisors;
    }
}

solve(6);