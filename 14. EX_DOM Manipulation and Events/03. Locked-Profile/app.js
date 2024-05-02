function lockedProfile() {
    const profileElements = document.querySelectorAll('.profile');

    for (const profileElement of profileElements) {
        const showButtonElement = profileElement.querySelector('button');
        const lockRadioElement = profileElement.querySelector('input[type=radio][value=lock]');

        showButtonElement.addEventListener('click', (e) => {
            // console.log(lockRadioElement.checked);  
            if (lockRadioElement.checked) {
                return;
            }

            const additionalInformationElement = showButtonElement.previousElementSibling;
            // console.log(additionalInformationElement);

            // if (showButtonElement.textContent === 'Show more') {
            //     additionalInformationElement.style.display = 'block';
            //     showButtonElement.textContent = 'Hide it';
            // } else {
            //     additionalInformationElement.style.display = 'none';
            //     showButtonElement.textContent = 'Show more';
            // }

            additionalInformationElement.style.display = additionalInformationElement.style.display === 'block'
                ? 'none'
                : 'block';
            showButtonElement.textContent = showButtonElement.textContent === 'Show more'
                ? 'Hide it'
                : 'Show more';
        });
    }
}