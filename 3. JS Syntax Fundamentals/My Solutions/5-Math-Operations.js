function operation(number1, number2, operator) {
    switch (operator) {
        case '+':
            console.log(number1 + number2);
        break;
        case '-':
            console.log(number1 - number2);
        break;
        case '*':
            console.log(number1 * number2);
        break;
        case '/':
            console.log(number1 / number2);
        break;
        case '%':
            console.log(number1 % number2);
        break;
        case '**':
            console.log(number1 ** number2);
        break;
    }
}

operation(5, 6, '+');
operation(3, 5.5, '*');