function addItem() {
    const itemListElement = document.getElementById('items');
    const inputElement = document.getElementById('newItemText');

    const newElement = document.createElement('li');

    newElement.textContent = inputElement.value;

    itemListElement.appendChild(newElement);

    inputElement.value = '';
}