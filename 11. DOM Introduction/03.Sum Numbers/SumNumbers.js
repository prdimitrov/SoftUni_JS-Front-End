function calc() {
    // TODO: sum = num1 + num2
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.getElementById('num2');
    const sumInputElement = document.querySelector('#sum');

    // const firstNum = Number(firstInputElement.value);
    // const secondNum = Number(secondInputElement.value);

    sumInputElement.value = Number(firstInputElement.value) + Number(secondInputElement.value);
}
