window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById('add-btn');
    const expenseInputElement = document.getElementById('expense');
    const amountElement = document.getElementById('amount');
    const dateInputElement = document.getElementById('date');
    const previewListElement = document.getElementById('preview-list');
    const expenseListElement = document.getElementById('expenses-list');
    const deleteButtonElement = document.querySelector('.btn.delete');

    addButtonElement.addEventListener('click', () => {
        // Get input information
        const expense = expenseInputElement.value;
        const amount = amountElement.value;
        const date = dateInputElement.value;

        // Check empty element
        if (!expense || !amount || !date) {
            //Expense Type, Amount, and Date 
            // should be non-empty strings. 
            // If any of them are empty, 
            // the program should not do anything.
            return;
        }

        // Add to preview list
        const expenseLiElement = createArticleElement(expense, amount, date);
        previewListElement.appendChild(expenseLiElement);

        // Disable add button
        addButtonElement.setAttribute('disabled', 'disabled');

        // Clear inputs
        expenseInputElement.value = '';
        amountElement.value = '';
        dateInputElement.value = '';

        // Get button elements
        //------------------------------------------------------ Без интервал!
        const editButtonElement = expenseLiElement.querySelector('.btn.edit');
        const okButtonElement = expenseLiElement.querySelector('.btn.ok');

        // Attach event listeners
        editButtonElement.addEventListener('click', () => {


            // // Extract date from preview
            // const pElementsNodeList = expenseLiElement.querySelectorAll('article p');
            // const pElements = Array.from(pElementsNodeList);
            // const expenseType = pElements[0].textContent.substring(6);
            // const amount = pElements[1].textContent.substring(8, pElements[1].textContent.length - 1);
            // const date = pElements[2].textContent.substring(6);
            // Send data to inputs
            // expenseInputElement.value = expenseType;
            // amountElement.value = amount;
            // dateInputElement.value = date;
            expenseInputElement.value = expense;
            amountElement.value = amount;
            dateInputElement.value = date;

            // Clear preview (should remove event listeners also)
            expenseLiElement.remove();

            // Enable add button
            addButtonElement.removeAttribute('disabled');
        });

        // Attach ok event listener
        okButtonElement.addEventListener('click', () => {
            // remove buttons from expense item
            const expenseButtonsElement = expenseLiElement.querySelector('.buttons');
            expenseButtonsElement.remove();
            
            // move expense item to expense list
            expenseListElement.appendChild(expenseLiElement);

            // enable add button
            addButtonElement.removeAttribute('disabled');
        });
    });

    deleteButtonElement.addEventListener('click', () => {
        expenseListElement.innerHTML = '';

    });

    function createArticleElement(expense, amount, date) {
        const pTypeElement = document.createElement('p');
        pTypeElement.textContent = `Type: ${expense}`;

        const pAmountElement = document.createElement('p');
        pAmountElement.textContent = `Amount: ${amount}$`;

        const pDateElement = document.createElement('p');
        pDateElement.textContent = `Date: ${date}`;

        const articleElement = document.createElement('article');
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);

        const editButtonElement = document.createElement('button');
        editButtonElement.classList.add('btn', 'edit');
        editButtonElement.textContent = 'edit';

        const okButtonElement = document.createElement('button');
        okButtonElement.classList.add('btn', 'ok');
        okButtonElement.textContent = 'ok';

        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.classList.add('buttons');
        buttonsDivElement.appendChild(editButtonElement);
        buttonsDivElement.appendChild(okButtonElement);

        const liExpenseElement = document.createElement('li');
        liExpenseElement.classList.add('expense-item');
        liExpenseElement.appendChild(articleElement);
        liExpenseElement.appendChild(buttonsDivElement);

        return liExpenseElement;
    }
}