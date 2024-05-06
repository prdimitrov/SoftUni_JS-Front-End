function solve(input) {
    // Взимаме само първия ред
    const baristaCount = Number(input.shift());
    const team = {};

    // Prepare team
    for (let i = 0; i < baristaCount; i++) {
        const [name, shift, coffeTypes] = input[i].split(' ');

        team[name] = {
            shift,
            coffeTypes: coffeTypes.split(','),
        };
    }

    // console.log(team);

    // Execute commands 
    let commandLine = input.shift();

    while (commandLine != 'Closed') {
        const [command, name, firstArg, secondArg] = commandLine.split(' / ');
        // const [command, name, ...args] = commandLine.split(' / ');
        const barista = team[name];

        let shift, coffeeType;

        switch (command) {
            case 'Prepare':
                // shift = args[0];
                shift = firstArg;
                coffeeType = secondArg;
                if (barista.shift === firstArg
                    && barista.coffeTypes.includes(secondArg)) {
                    console.log(`${name} has prepared a ${secondArg} for you!`);
                } else {
                    console.log(`${name} is not available to prepare a ${coffeeType}.`);
                }
                break;
            case 'Change Shift':
                shift = firstArg;
                barista.shift = shift;
                console.log(`${name} has updated his shift to: ${shift}`);
                break;
            case 'Learn':
                coffeeType = firstArg;
                if (barista.coffeTypes.includes(coffeeType)) {
                    console.log(`${name} knows how to make ${coffeeType}.`);
                } else {
                    barista.coffeTypes.push(coffeeType);
                    console.log(`${name} has learned a new coffee type: ${coffeeType}.`);
                }
                break;
        }
        commandLine = input.shift();
    }
    for (const baristaName in team) {
        console.log(`Barista: ${baristaName}, Shift: ${team[baristaName].shift}, Drinks: ${team[baristaName].coffeTypes.join(', ')}`);
    }
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed']
);

console.log('------------------------------------------------------');

solve(['4',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'David night Espresso',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / day',
    'Learn / Carol / Latte',
    'Prepare / Bob / night / Latte',
    'Learn / David / Cappuccino',
    'Prepare / Carol / day / Cappuccino',
    'Change Shift / Alice / night',
    'Learn / Bob / Mocha',
    'Prepare / David / night / Espresso',
    'Closed']
);