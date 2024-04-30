function toggle() {
    // console.log('TODO:...');
    const buttonElement = document.getElementsByClassName('button')[0];
    const extraElement = document.getElementById('extra');
    // const toggleButtonElement = document.querySelector('.head span.button');

    if (extraElement.style.display === 'none' || extraElement.style.display === '') {
        extraElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    } else {
        extraElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}