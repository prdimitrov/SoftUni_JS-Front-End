// You will receive an array of names. 
// Sort them alphabetically in ascending order 
// and print a numbered list of all the names, each on a new line.

// function listOfNames(namesArray) {
//     namesArray.sort();
//     let number = 0;
//     namesArray.forEach(person => {
//         number++;
//         console.log(`${number}.${person}`);
//     });
// }

function listOfNames(namesArray) {
    namesArray.sort();

    let sortedArray = namesArray.sort((a, b) => a.localeCompare(b));
    if (namesArray) {
        for (let i = 0; i < sortedArray.length; i++) {
            console.log(`${i + 1}.${sortedArray[i]}`)
        }
    }
}

listOfNames(["John", "Bob", "Christina", "Ema"]);