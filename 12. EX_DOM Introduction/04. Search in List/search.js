function search() {
   const townListElement = document.getElementById('towns');
   const resultElement = document.getElementById('result');
   const searchText = document.getElementById('searchText').value;
   let matchCount = 0;

   const townElements = Array.from(townListElement.children);
   
   // ------------ с .children не работи в judge ------------
   // С .children взимаме децата, които са само HTML елементи
   // for (const townElement of townListElement.children) {


   for (const townElement of townElements) {
      if (townElement.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         townElement.style.textDecoration = 'underline';
         townElement.style.fontWeight = 'bold';

         // Лектора каза и този начин, обаче нещо работи нещо :D
         // townElement.style = {
         //    //...townElement.style, , ако искаме да запазим старите пропъртита на елемента 
         //    textDecoration: 'underline', 
         //    fontWeight: 'bold',
         // };
         matchCount++;
      } else {
         townElement.style.textDecoration = 'none';
         townElement.style.fontWeight = 'normal';
      }
   }
   resultElement.textContent = `${matchCount} matches found`;
}
