function solve(input) {
    const pattern = /#([a-zA-Z]+)/g;
    // const pattern = /#(?<word>[a-zA-Z]+)/g;

    const matches = input.matchAll(pattern);
    for (const match of matches) {
        console.log(match[1]);
        // ако използваме match[0], ще върне група с думи, които имат # отпред!
        // console.log(match.groups.word);
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');
