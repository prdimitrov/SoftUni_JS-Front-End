function solve() {
  let input = document.getElementById('text').value;
  let currentCase = document.getElementById('naming-convention').value;

  let resultArr = input.toLowerCase().split(' ');

  if (currentCase === 'Camel Case') {
    for (let i = 1; i < resultArr.length; i++) {
      resultArr[i] = resultArr[i].charAt(0).toUpperCase() + resultArr[i].slice(1);
    }
  } else if (currentCase === 'Pascal Case') {
    for (let i = 0; i < resultArr.length; i++) {
      resultArr[i] = resultArr[i].charAt(0).toUpperCase() + resultArr[i].slice(1);
    }
  } else {
    return document.getElementById('result').textContent = 'Error!';
  }
  return document.getElementById('result').textContent = resultArr.join('');
}