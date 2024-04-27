function solve(firstCharacter, secondCharacter) {
    // find the start character
    function getSortedCharacters(a, b) {
        const characters = [a, b];

        characters.sort();

        return characters;
    }

    function getCharactersBetween(start, end) {
        let characters = [];
        for (let i = start.charCodeAt(0) + 1; i < end.charCodeAt(0); i++) {
            characters.push(String.fromCharCode(i));
        }
        return characters;
    }

    // const start = sortedCharacters[0];
    // const end = sortedCharacters[1];
    // const sortedCharacters = getSortedCharacters(firstCharacter, secondCharacter);
    const [start, end] = getSortedCharacters(firstCharacter, secondCharacter);

    // Iterate from start to end
    const result = getCharactersBetween(start, end);

    // console.log(result.join(' '));
    console.log(...result);
    // console.log по подразбиране си прави разредба с интервали!!!!!
}

solve('a', 'd');

solve('#', ':');

solve('C', '#');