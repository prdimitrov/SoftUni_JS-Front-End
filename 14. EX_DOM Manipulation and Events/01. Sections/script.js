function create(words) {
   const contentElement = document.getElementById('content');
   
   
   // Create div with paragraph
   const divElements = words
      .map(word => {
         // Create paragraph
         const pElement = document.createElement('p');
         // Add text content
         pElement.textContent = word;
         // Hide paragraphs
         pElement.style.display = 'none';

         // Create div
         const divElement = document.createElement('div');

         // Append paragraph to div
         divElement.appendChild(pElement);

         // divElement.addEventListener('click', () => {
         //    pElement.style.display = 'block';
         // })

         // Return div
         return divElement;
      });

   divElements
      .forEach(divElement => {
         divElement.addEventListener('click', () => {
            const pElement = divElement.querySelector('p');
            pElement.style.display = 'block';
         })
      });

   // Append all to DOM
   // contentElement.append(...divElements); // Не работи в judge

   // Not efficient
   // divElements.forEach(divElement => contentElement.appendChild(divElement));
   
   
   // По-хубав начин
   // Това го правим в отделен DOM
   // const divElementsFragment = document.createDocumentFragment();
   // divElements.forEach(divElement => contentElement.appendChild(divElement));

   divElements.forEach(divElement => contentElement.appendChild(divElement))
}