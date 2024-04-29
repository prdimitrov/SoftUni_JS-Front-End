function colorize() {
    // const evenRowElements = document.querySelectorAll('table tr:nth-child(2n)');
    const evenRowElements = document.querySelectorAll('table tr');

    // Не работи с judge
    // evenRowElements.forEach(element => element.style.backgroundColor = 'teal');

    // for (const element of evenRowElements) {
    //     element.style.backgroundColor = 'teal';
    // }
    for (let i = 1; i < evenRowElements.length; i+= 2) {
        evenRowElements[i].style.backgroundColor = 'teal';
    }

}