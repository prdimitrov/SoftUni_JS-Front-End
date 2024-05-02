function attachEventsListeners() {
    const inputUnitsElement = document.getElementById('inputUnits');
    const inputDistanceElement = document.getElementById('inputDistance');
    const convertButtonElement = document.getElementById('convert');
    const outputDistanceElement = document.getElementById('outputDistance');
    const outputUnitsElement = document.getElementById('outputUnits');

    convertButtonElement.addEventListener('click', (e) => {
        let initialValue = parseFloat(inputDistanceElement.value);



        if (outputUnitsElement.value !== inputUnitsElement.value) {
            switch (inputUnitsElement.value) {
                case 'km':
                    initialValue *= 1000;
                    break;
                case 'm':
                    initialValue *= 1;
                    break;
                case 'cm':
                    initialValue *= 0.01;
                    break;
                case 'mm':
                    initialValue *= 0.001;
                    break;
                case 'mi':
                    initialValue *= 1609.34;
                    break;
                case 'yrd':
                    initialValue *= 0.9144;
                    break;
                case 'ft':
                    initialValue *= 0.3048;
                    break;
                case 'in':
                    initialValue *= 0.0254;
                    break;
            }

            switch (outputUnitsElement.value) {
                case 'km':
                    outputDistanceElement.value = initialValue / 1000;
                    break;
                case 'm':
                    outputDistanceElement.value = initialValue / 1;
                    break;
                case 'cm':
                    outputDistanceElement.value = initialValue / 0.01;
                    break;
                case 'mm':
                    outputDistanceElement.value = initialValue / 0.001;
                    break;
                case 'mi':
                    outputDistanceElement.value = initialValue / 1609.34;
                    break;
                case 'yrd':
                    outputDistanceElement.value = initialValue / 0.9144;
                    break;
                case 'ft':
                    outputDistanceElement.value = initialValue / 0.3048;
                    break;
                case 'in':
                    outputDistanceElement.value = initialValue / 0.0254;
                    break;
            }
        } else {
            outputDistanceElement.value = inputDistanceElement.value;
        }
    });
}