function solve() {
    const inputNumberElement = document.getElementById('input');
    const resultElement = document.getElementById('result');
    // const selectMenuFromElement = document.getElementById('selectMenuFrom');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const convertButtonElement = document.querySelector('button');

    // Populate select menu to with options    
    // const binaryOptionElement = document.createElement('option');
    // То па вече има написан option :D
    const binaryOptionElement = selectMenuToElement.querySelector('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.textContent = 'Binary';

    const hexadecimalOptionElement = document.createElement('option');
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.textContent = 'Hexadecimal';
    selectMenuToElement.appendChild(hexadecimalOptionElement);


    const convertors = {
        binary: convertDecimalToBinary,
        hexadecimal: convertDecimalToHex,
    };

    convertButtonElement.addEventListener('click', () => {
        const numberValue = Number(inputNumberElement.value);

        resultElement.value = convertors[selectMenuToElement.value](numberValue);
    });



    // Слагаме 10 в случай, за да подскажем
    // на редактора, че искаме number да е 
    // число. Просто някаква стойност.
    function convertDecimalToBinary(number = 10) {
        const result = [];

        while (number > 0) {
            result.push(number % 2);
            number = Math.trunc(number / 2);
        }

        return result.reverse().join('');
    }

    function convertDecimalToHex(number) {
        // По - простия вариант е примерно с Number(11).toString(16), 
        // което ще върне 'b' :D.
        const digitMapping = new Map([
            [0, '0'],
            [1, '1'],
            [2, '2'],
            [3, '3'],
            [4, '4'],
            [5, '5'],
            [6, '6'],
            [7, '7'],
            [8, '8'],
            [9, '9'],
            [10, 'A'],
            [11, 'B'],
            [12, 'C'],
            [13, 'D'],
            [14, 'E'],
            [15, 'F'],
        ]);
        const result = [];

        while (number > 0) {
            result.push(digitMapping.get(number % 16));
            number = Math.trunc(number / 16);
        }

        return result.reverse().join('');
    }
}