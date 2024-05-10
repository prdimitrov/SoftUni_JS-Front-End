function solve(inputArr) {
    const n = inputArr.shift();
    const ridersList = {};

    for (let i = 0; i < n; i++) {
        const [rider, fuelCapacity, position] = inputArr[i].split('|');
        ridersList[rider] = {
            fuelCapacity,
            position
        };
    }

    let commandLine = inputArr.shift();

    while (commandLine != 'Finish') {
        const [command, rider, firstArg, secondArg] = commandLine.split(' - ');
        const currentRider = ridersList[rider];
        switch (command) {
            case 'StopForFuel':
                // "StopForFuel – {rider} – {minimum fuel} – {changed position}"
                // •	If the rider has less than minimum fuel, he needs to a make pit stop. Print this message:
                // o	"{rider} stopped to refuel but lost his position, now he is {changed position}."
                // •	If the rider has enough fuel print:
                // o	"{rider} does not need to stop for fuel!"
                if (currentRider.fuelCapacity < Number(firstArg)) {
                    console.log(`${rider} stopped to refuel but lost his position, now he is ${secondArg}.`);
                    // TODO: In case of problems, remove this line where you set the fuel!
                    currentRider.fuelCapacity = Number(100);
                    currentRider.position = Number(secondArg);
                } else {
                    console.log(`${rider} does not need to stop for fuel!`);
                }
                break;
            case 'Overtaking':
                // Overtaking – {rider 1} – {rider 2}"
                // •	If rider 1 is positioned to the left of rider 2, it means that rider 1 is ahead of rider 2 in the race, swap the position of the two riders. Then, print the following:
                // "{rider 1} overtook {rider 2}!"
                if (ridersList[rider].position < ridersList[firstArg].position) {
                    let temp = ridersList[rider].position;
                    ridersList[rider].position = ridersList[firstArg].position;
                    ridersList[firstArg].position = temp;
                    console.log(`${rider} overtook ${firstArg}!`);
                }
                break;
            case 'EngineFail':
                // "EngineFail – {rider} – {laps left}"
                // •	If the rider’s engine fails, remove him from the race and print:
                // "{rider} is out of the race because of a technical issue, {laps left} laps before the finish."
                console.log(`${rider} is out of the race because of a technical issue, ${firstArg} laps before the finish.`);
                delete ridersList[rider];
                break;

        }
        commandLine = inputArr.shift();
    }

    /*
        Output: 
        "{rider}
          Final position: {position}"

    */
    for (const rider in ridersList) {
        console.log(`${rider}\n Final position: ${ridersList[rider].position}`);
    }
}

solve((["3",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|2",
    "Jorge Lorenzo|80|3",
    "StopForFuel - Valentino Rossi - 50 - 1",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
);
console.log('---------------------------------');
solve((["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"])
);