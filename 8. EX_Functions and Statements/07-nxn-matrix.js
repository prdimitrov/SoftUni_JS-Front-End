function solve(number) {
    // const printRow = (num) => `${num} `.repeat(num).trim();
    const createRow = (num) => new Array(num).fill(num).join(' ');

    for (let i = 0; i < number; i++) {
       console.log(createRow(number)); 
    }

}

solve(7);