function focused() {
    const inputElements = document.querySelectorAll('input[type=text]');

    // Използваме Array.form, защото forEach само по себе си не работи в judge.

    Array.from(inputElements).forEach(inputElement => inputElement.addEventListener('focus', (event) => {
        event.target.parentElement.classList.add('focused');
        // console.log(event.target.parentElement);
    }));

    Array.from(inputElements).forEach(inputElement => inputElement.addEventListener('blur', (event) => {
        event.target.parentElement.classList.remove('focused');
    }));
}