function solve(input) {
    let startIndex = -1;
    const words = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i] === input[i].toUpperCase()) {
            if (startIndex < 0) {
                startIndex = i;
            } else {

                let word = input.substring(startIndex, i);
                words.push(word);
                startIndex = i;
            }
        }
    }

    words.push(input.substring(startIndex));
    console.log(words.join(', '));
}

function fancySolve(input) {
    const matches = input.matchAll(/[A-Z][a-z]*/g);

    const words = Array.from(matches).map(match => match[0]);
    console.log(words.join(', '));
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');