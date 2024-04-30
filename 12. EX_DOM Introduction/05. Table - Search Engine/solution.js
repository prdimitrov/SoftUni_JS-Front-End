function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const trElements = document.querySelectorAll('table.container tbody tr');
      const searchFieldElement = document.getElementById('searchField');
      const searchText = searchFieldElement.value;

      for (const trElement of trElements) {
         const tdElements = trElement.querySelectorAll('td');
         let isSelected = false;

         trElement.classList.remove('select');

         for (const tdElement of tdElements) {
            // TODO: CHECK CASE SENSITIVITY FIXME: (.toLowerCase())
            if (tdElement.textContent.toLowerCase()
            .includes(searchText.toLowerCase())) {
               isSelected = true;
               break;
            }
         }

         if (isSelected && searchText !== '') {
            // trElement.className = 'select';
            trElement.classList.add('select');
         }

      }

      // Clear old data
      searchFieldElement.value = '';
   }
}