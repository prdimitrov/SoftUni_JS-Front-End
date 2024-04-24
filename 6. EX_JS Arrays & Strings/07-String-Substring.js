function solve(word, text) {
    const words = text.toLowerCase().split(' ');
    const isIncluded = words.includes(word.toLowerCase());

    if (isIncluded) {
        return word;
    }

    return `${word} not found!`;
}

const result1 = solve('javascript',
'JavaScript is the best programming language'
);
const result2 = solve('python',
'JavaScript is the best programming language'
);

console.log(result1 + `\n` + result2);