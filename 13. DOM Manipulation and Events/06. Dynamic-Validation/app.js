function validate() {
    const emailInputElement = document.getElementById('email');
    const pattern = /^[a-z]+@[a-z]+\.[a-z]+/;

    emailInputElement.addEventListener('change', (event) => {
        // console.log(event.target.value);
        if (!pattern.test(event.target.value)) {
            event.target.classList.add('error');
        } else {
            event.target.classList.remove('error');
        }
    });
}