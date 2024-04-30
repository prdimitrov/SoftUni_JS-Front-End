function generateReport() {
    const thElements = document.querySelectorAll('table thead th');
    const trElements = document.querySelectorAll('table tbody tr');
    const outputElement = document.getElementById('output');

    const columns = Array
        .from(thElements)
        .map(thElement => {
            // Принципно само input е достатъчно! :D
            const checkboxElement = thElement.querySelector('input[type=checkbox]');
            return {
                name: thElement.textContent.toLocaleLowerCase().trim(),
                active: checkboxElement.checked
            };
        });

    const reportData = Array
        .from(trElements)
        .map(trElement => {
            const tdElements = trElement.querySelectorAll('td'); //Дай ми всичките table дати

            const result = Array
                .from(tdElements)
                .reduce((data, tdElement, i) => {
                    if (!columns[i].active) {
                        //Ако не е active, остави data такава каквато си е.
                        return data;
                    }

                    // Ако е active
                    const columnName = columns[i].name;
                    data[columnName] = tdElement.textContent;

                    return data;
                }, {})
            return result;
        })

        // 2 стои за 2 интервала спейсинг
        outputElement.value = JSON.stringify(reportData, null, 2);
}