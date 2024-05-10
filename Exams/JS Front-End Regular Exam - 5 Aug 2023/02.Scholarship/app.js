window.addEventListener("load", solve);

function solve() {
  const applyContentElement = document.getElementById('applyContent');
  const studentElement = document.getElementById('student');
  const universityElement = document.getElementById('university');
  const scoreElement = document.getElementById('score');
  const nextButton = document.getElementById('next-btn');
  const previewListElement = document.getElementById('preview-list');
  const candidatesListElement = document.getElementById('candidates-list');

  // Get data from the input fields
  nextButton.addEventListener('click', addToPreview);

  function getInputFieldsData() {
    const student = studentElement.value;
    const university = universityElement.value;
    const score = scoreElement.value;

    if (student == '' ||
      university == '' ||
      score == '') {
      clearInputFieldsData();
      return;
    }

    return [student, university, score];
  }

  function clearInputFieldsData() {
    studentElement.value = '';
    universityElement.value = '';
    scoreElement.value = '';
  }

  function addToPreview() {
    const liElement = document.createElement('li');
    liElement.setAttribute('class', 'application');

    const article = document.createElement('article');

    const fieldsDataElements = getInputFieldsData();
    const NameH4Element = document.createElement('h4');
    NameH4Element.textContent = fieldsDataElements[0];
    const universityPElement = document.createElement('p');
    universityPElement.textContent = 'University: ' + fieldsDataElements[1];
    const scorePElement = document.createElement('p');
    scorePElement.textContent = `Score: ${fieldsDataElements[2]}`;

    article.appendChild(NameH4Element);
    article.appendChild(universityPElement);
    article.appendChild(scorePElement);

    liElement.appendChild(article);

    // Create buttons for the liElement
    const editButton = document.createElement('button');
    editButton.setAttribute('class', 'action-btn edit');
    editButton.textContent = 'edit';
    editButton.addEventListener('click', editCandidate);
    const applyButton = document.createElement('button');
    applyButton.setAttribute('class', 'action-btn apply');
    applyButton.textContent = 'apply';
    applyButton.addEventListener('click', applyCandidate);

    liElement.appendChild(editButton);
    liElement.appendChild(applyButton);

    previewListElement.appendChild(liElement);

    clearInputFieldsData();

    function editCandidate() {
      studentElement.value = NameH4Element.textContent;
      universityElement.value = universityPElement.textContent.split(': ')[1];
      scoreElement.value = scorePElement.textContent.split(': ')[1];
      previewListElement.removeChild(liElement);
    }
    function applyCandidate() {
      liElement.removeChild(editButton);
      liElement.removeChild(applyButton);
      candidatesListElement.appendChild(liElement);
    }
  }
}
