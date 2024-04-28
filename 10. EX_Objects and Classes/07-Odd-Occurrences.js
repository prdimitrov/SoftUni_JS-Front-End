function solve(input) {
    const words = input.split(' ');
    const wordOccurances = {};

    for (const word of words) {
        if (!wordOccurances.hasOwnProperty(word.toLowerCase())) {
            wordOccurances[word.toLowerCase()] = 0;
        }

        wordOccurances[word.toLowerCase()]++;
    }

    const result = [];
    for (const word in wordOccurances) {
        if (wordOccurances[word] % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}

function fancySolve(input) {
    const occurances = input
        .split(' ')
        .reduce((acc, word) =>
            acc.hasOwnProperty(word.toLowerCase())
                ? { ...acc, [word.toLowerCase()]: acc[word.toLowerCase()] + 1 }
                : { ...acc, [word.toLowerCase()]: 1 }
            , {});

            const result = Object
            .entries(occurances)
            .filter(([word, count]) => count % 2 !== 0)
            .map(([word, count]) => word)
            .join(' ');

            console.log(result);
}


fancySolve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('----------------------');
fancySolve('Cake IS SWEET is Soft CAKE sweet Food');