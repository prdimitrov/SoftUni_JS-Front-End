window.addEventListener("load", solve);

function solve() {
  const typeElement = document.getElementById('type');
  const ageElement = document.getElementById('age');
  const genderElement = document.getElementById('gender');
  const adoptButton = document.getElementById('adopt-btn');
  const adoptionInfoList = document.getElementById('adoption-info');

  const adoptedList = document.getElementById('adopted-list');

  adoptButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeElement.value == '' ||
      ageElement.value == '' ||
      genderElement.value == ''
    ) {
      clearInputs();
      return;
    }
    let liElement = document.createElement('li');
    let article = document.createElement('article');
    let petPElement = document.createElement('p');
    petPElement.textContent = 'Pet:' + typeElement.value;
    let genderPElement = document.createElement('p');
    genderPElement.textContent = 'Gender:' + genderElement.value;
    let agePElement = document.createElement('p');
    agePElement.textContent = 'Age:' + ageElement.value;
    article.appendChild(petPElement);
    article.appendChild(genderPElement);
    article.appendChild(agePElement);

    liElement.appendChild(article);

    let buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('class', 'buttons');

    let editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.setAttribute('class', 'edit-btn');
    editButton.addEventListener('click', () => {
      typeElement.value = petPElement.textContent.substring(4);
      ageElement.value = agePElement.textContent.substring(4);
      genderElement.value = genderPElement.textContent.substring(7);
      adoptionInfoList.removeChild(liElement);
    });


    let doneButton = document.createElement('button');
    doneButton.textContent = 'Done';
    doneButton.setAttribute('class', 'done-btn');
    doneButton.addEventListener('click', () => {
      liElement.removeChild(buttonsDiv);
      let clearButton = document.createElement('button');
      clearButton.textContent = 'Clear';
      clearButton.setAttribute('class', 'clear-btn');
      clearButton.addEventListener('click', () => {
        adoptedList.removeChild(liElement);
      });
      liElement.appendChild(clearButton);
      adoptionInfoList.removeChild(liElement);
      adoptedList.appendChild(liElement);
    });


    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(doneButton);
    liElement.appendChild(buttonsDiv);
    adoptionInfoList.appendChild(liElement);

    clearInputs();
  });

  function clearInputs() {
    typeElement.value = '';
    ageElement.value = '';
    genderElement.value = '';
  }
}
