function solve(input) {
    const baristasCount = Number(input.shift());
    const team = {};

    for (let i = 0; i < baristasCount; i++) {
        const [name, shift, coffeeTypes] = input[i].split(' ');
        team[name] = {
            shift: shift,
            coffeeTypes: coffeeTypes.split(','),
        }
    }
    // console.log(team);
    let commandLine = input.shift();
    while (commandLine != 'Closed') {
        const [command, name, firstArg, secondArg] = commandLine.split(' / ');
        let barista = team[name];

        let shift, coffeeType;

        switch (command) {
            case 'Prepare':
                shift = firstArg;
                coffeeType = secondArg;
                if (barista.shift === firstArg
                    && barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${name} has prepared a ${coffeeType} for you!`);
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
                if (barista.coffeeTypes.includes(coffeeType)) {
                    console.log(`${name} knows how to make ${coffeeType}.`);
                } else {
                    barista.coffeeTypes.push(coffeeType);
                    console.log(`${name} has learned a new coffee type: ${coffeeType}.`);
                }
                break;
        }
        commandLine = input.shift();
    }
    // Output
    // Every order should print its own template sentence. After that, print all baristas, along with their updated shifts, 
    // and the list of coffee types they can prepare, in the following format:
    // "Barista: {barista name}, Shift: {shift}, Drinks: {drink type 1, drink type 2, ...}"
    for (const member in team) {
        console.log(`Barista: ${member}, Shift: ${team[member].shift}, Drinks: ${team[member].coffeeTypes.join(', ')}`);
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