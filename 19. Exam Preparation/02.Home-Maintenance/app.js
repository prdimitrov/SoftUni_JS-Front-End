window.addEventListener("load", solve);
function solve() {
    const formElement = document.querySelector('form');
    const placeElement = document.getElementById('place');
    const actionElement = document.getElementById('action');
    const personElement = document.getElementById('person');
    const addButtonElement = document.getElementById('add-btn');


    addButtonElement.addEventListener('click', addBtnFunc);

    function addBtnFunc() {
        if (placeElement.value.trim() == '' ||
            actionElement.value.trim() == '' ||
            personElement.value.trim() == '') {
            // formElement.reset();
            return;
        }
        const taskListElement = document.getElementById('task-list');
        const doneListElement = document.getElementById('done-list');
        const liElement = document.createElement('li');
        liElement.setAttribute('class', 'clean-task');
        const articleElement = document.createElement('article');

        const placePElement = document.createElement('p');
        const actionPElement = document.createElement('p');
        const personPElement = document.createElement('p');

        const place = placeElement.value;
        const action = actionElement.value;
        const person = personElement.value;

        placePElement.textContent = `Place:${place}`;
        actionPElement.textContent = `Action:${action}`;
        personPElement.textContent = `Person:${person}`;

        articleElement.appendChild(placePElement);
        articleElement.appendChild(actionPElement);
        articleElement.appendChild(personPElement);
        liElement.appendChild(articleElement);

        // Buttons div element!
        const buttonsDivElement = document.createElement('div');
        buttonsDivElement.setAttribute('class', 'buttons');
        // Buttons for the div element!
        const editButton = document.createElement('button');
        editButton.setAttribute('class', 'edit');
        editButton.textContent = 'Edit';
        const doneButton = document.createElement('button');
        doneButton.setAttribute('class', 'done');
        doneButton.textContent = 'Done';

        buttonsDivElement.appendChild(editButton);
        buttonsDivElement.appendChild(doneButton);

        liElement.appendChild(buttonsDivElement);

        taskListElement.appendChild(liElement);

        // the input fields should be cleared after adding the information!!!!!
        // !!!!!
        formElement.reset();

        // Edit and Done button actions
        editButton.addEventListener('click', editBtnFunc);
        doneButton.addEventListener('click', doneBtnFunc);

        function editBtnFunc() {
            placeElement.value = place;
            actionElement.value = action;
            personElement.value = person;
            taskListElement.removeChild(liElement);
        }
        function doneBtnFunc() {
            const doneLiElement = document.createElement('li');
            doneLiElement.appendChild(articleElement);
            const deleteButton = document.createElement('button');
            deleteButton.setAttribute('class', 'delete');
            deleteButton.textContent = 'Delete';
            doneLiElement.appendChild(deleteButton);

            // DELETE BUTTON FUNCTION!!
            deleteButton.addEventListener('click', deleteBtnFunc);

            // Append the doneLiElement to the DONE LIST!!!!!
            doneListElement.appendChild(doneLiElement);
            taskListElement.removeChild(liElement);
            function deleteBtnFunc() {
                doneListElement.remove(doneLiElement);
            }
        }
    }
}