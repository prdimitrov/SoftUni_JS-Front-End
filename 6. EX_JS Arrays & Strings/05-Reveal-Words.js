// function arraySolve(wordsInput, template = '') {
//     const words = wordsInput.split(', ');
//     const templateWords = template.split(' ');
    
//     const result = templateWords
//     .map(tWord => tWord[0] === '*' ? words.find(w => w.length === tWord.length) : tWord)
//     .join(' ')

//     console.log(result);
// }

// function fancySolve(wordsInput, template = '') {
//     const words = wordsInput.split(', ');
//     const matches = template.matchAll(/\*+/g);
//     for (const match of matches) {
//         const word = words.find(w => w.length === match[0].length);
//         template = template.replace(match[0], word);
//     }
//     console.log(template);
// }

function solve(wordsInput, template) {
    const words = wordsInput.split(', ');

    let startIndex = -1;
    let endIndex = -1;

    for (let i = 0; i < template.length; i++) {
        if (template[i] === '*') {
            if (startIndex < 0) {
                startIndex = i;
                endIndex = i + 1;
            } else {
                endIndex = i + 1;
            }
        } else {
            if (startIndex >= 0) {
                // DO MAGIC
                let length = endIndex - startIndex;
                let word = words.find(w => w.length === length);
                let stars = '*'.repeat(length);

                // template = template.replace('*'.repeat(length), word);
                template = template.substring(0, startIndex) + word + template.substring(endIndex);
                startIndex = -1;
                endIndex = -1;
            }
        }
    }
    if (startIndex >= 0) {
        // DO MAGIC
        let length = endIndex - startIndex;
        let word = words.find(w => w.length === length);
        let stars = '*'.repeat(length);

        // template = template.replace('*'.repeat(length), word);
        template = template.substring(0, startIndex) + word + template.substring(endIndex);
    }
    console.log(template);
}

