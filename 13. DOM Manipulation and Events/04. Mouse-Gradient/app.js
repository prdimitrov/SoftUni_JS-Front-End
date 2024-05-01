function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');

    gradientElement.addEventListener('mousemove', (event) => {
        const currentWidth = event.offsetX;
        const elementWidth = event.target.clientWidth;
        const progress = Math.floor((currentWidth / elementWidth) * 100);

        // console.log(event.target.clientWidth);
        // console.log(gradientElement.clientWidth);


        resultElement.textContent = `${progress}%`;
    });
}