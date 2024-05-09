window.addEventListener("load", solve);

function solve() {
  const formElement = document.querySelector('form');
  const nameElement = document.getElementById('name');
  const phoneElement = document.getElementById('phone');
  const categoryElement = document.getElementById('category');
  const checkListElement = document.getElementById('check-list');
  const contactListElement = document.getElementById('contact-list');
  const addButton = document.getElementById('add-btn');

  addButton.addEventListener('click', add);

  function add() {
    if (nameElement.value == '' || phoneElement.value == '' ||
      categoryElement == ''
    ) {
      formElement.reset();
      return;
    }
    // Creating liElement
    const liElement = document.createElement('li');
    // Creating Article for the liElement
    const article = document.createElement('article');
    // Creating p Elements for the liElement
    const namePElement = document.createElement('p');
    namePElement.textContent = 'name:' + nameElement.value;
    const phonePElement = document.createElement('p');
    phonePElement.textContent = `phone:${phoneElement.value}`;
    const categoryPElement = document.createElement('p');
    categoryPElement.textContent = `category:${categoryElement.value}`;
    // Appending the elements to the Article and 
    // appending the article to the li element
    article.appendChild(namePElement);
    article.appendChild(phonePElement);
    article.appendChild(categoryPElement);
    liElement.appendChild(article);
    // Creating a Div element for the li element
    const buttonsDivElement = document.createElement('div');
    buttonsDivElement.setAttribute('class', 'buttons');
    // Creating buttons for the Buttons Div Element
    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'edit-btn');
    editButton.addEventListener('click', () => {
      nameElement.value = namePElement.textContent.split(':')[1].trim();
      phoneElement.value = phonePElement.textContent.split(':')[1].trim();
      categoryElement.value = categoryPElement.textContent.split(':')[1].trim();
      checkListElement.removeChild(liElement);
    });


    const saveButton = document.createElement('button');
    saveButton.setAttribute('class', 'save-btn');
    saveButton.addEventListener('click', () => {
      contactListElement.appendChild(liElement);
      liElement.removeChild(buttonsDivElement);
      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('class', 'del-btn');
      liElement.appendChild(deleteButton);

      deleteButton.addEventListener('click', () => {
        contactListElement.removeChild(liElement);
      });
    });


    // Appending the buttons to the Div Element
    buttonsDivElement.appendChild(editButton);
    buttonsDivElement.appendChild(saveButton);
    // Appending the div element to th eli element 
    // and appending the li element to the check-list
    liElement.appendChild(buttonsDivElement);
    checkListElement.appendChild(liElement);
    // Resetting the form input fields
    formElement.reset();
  }
}
