function solve(inputArr) {
    const numberOfMembers = inputArr.shift();
    const posseList = {};

    for (let i = 0; i < numberOfMembers; i++) {
        const [charName, hp, bullets] = inputArr[i].split(' ');

        posseList[charName] = {
            hp: parseInt(hp),
            bullets: parseInt(bullets),
        };
    }

    let commandLine = inputArr.shift();

    while (commandLine != 'Ride Off Into Sunset') {
        const [command, name, firstArg, secondArg] = commandLine.split(' - ');

        const currentCharacter = posseList[name];
        switch (command) {
            case 'FireShot':
                //If the character has bullets, they fire a shot, reducing their bullet count by one. Print this message:
                // "{character name} has successfully hit {target} and now has {number of bullets left} bullets!"
                //If the character does not have bullets to shoot, print:
                //"{character name} doesn't have enough bullets to shoot at {target}!"
                // "FireShot - {character name} - {target}"
                if (currentCharacter.bullets > 0) {
                    // const target = firstArg;
                    console.log(`${name} has successfully hit ${firstArg} and now has ${--currentCharacter.bullets} bullets!`);
                } else {
                    console.log(`${name} doesn't have enough bullets to shoot at ${firstArg}!`);
                }
                break;
            case 'TakeHit':
                //Reduce the character's HP by the given damage amount. If the character is still standing (their HP is greater than 0), print:
                //"{character name} took a hit for {damage} HP from {attacker} and now has {current HP} HP!"
                //If the character has been gunned down, remove them from your posse and print:
                //"{character name} was gunned down by {attacker}!"
                //"TakeHit - {character name} - {damage} - {attacker}"
                currentCharacter.hp -= firstArg;
                if (currentCharacter.hp <= 0) {
                    console.log(`${name} was gunned down by ${secondArg}!`);
                    delete posseList[name];
                } else {
                    console.log(`${name} took a hit for ${firstArg} HP from ${secondArg} and now has ${currentCharacter.hp} HP!`);
                }
                break;
            case 'Reload':
                //If they have less than the maximum capacity of bullets (6), 
                //the character loads their gun. 
                //In this case, print the following on the console:
                //"{character name} reloaded {number of bullets reloaded} bullets!"
                //If the gun is already fully loaded, print:
                //"{character name}'s pistol is fully loaded!"
                //"Reload - {character name}"
                if (currentCharacter.bullets >= 6) {
                    // TODO: In case of any problem, set the bullets to 6!
                    // currentCharacter.bullets = 6;
                    console.log(`${name}'s pistol is fully loaded!`);
                } else {
                    console.log(`${name} reloaded ${6 - currentCharacter.bullets} bullets!`);
                    currentCharacter.bullets = 6;
                }
                break;
            case 'PatchUp':
                // •	The character patches up, recovering HP. 
                // If this action would bring their HP above the maximum value (100), 
                // HP is increased to 100. Print: 
                // " {character name} patched up and recovered {amount recovered} HP!"
                // o	If the character is already at full health, print:
                // " {character name} is in full health!"
                // "PatchUp – {character name} – {amount}"
                if (currentCharacter.hp >= 100) {
                    // TODO: In case of any problem, set the hp to 100!
                    console.log(`${name} is in full health!`);
                } else {
                    console.log(`${name} patched up and recovered ${firstArg} HP!`);
                    currentCharacter.hp += parseInt(firstArg);
                }
                break;
        }
        commandLine = inputArr.shift();
    }
    // Output:
    //"{Character name}
    // HP: {current HP}
    // Bullets: {current bullets}"
    for (const character in posseList) {
        const currentChar = posseList[character];
        console.log(`${character}\n HP: ${currentChar.hp}\n Bullets: ${currentChar.bullets}`);
    }
}

// Some tests
solve((["2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"])
);
console.log('-----------------------------------');
solve((["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20",
    "Reload - Jesse",
    "Ride Off Into Sunset"])
);
console.log('-----------------------------------');
solve((["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"])
);

/*
Expected output:
Gus doesn't have enough bullets to shoot at Bandit!
Gus was gunned down by Bandit!
Walt's pistol is fully loaded!
Walt
 HP: 100
 Bullets: 6
-----------------------------------
Jesse has successfully hit Bandit and now has 3 bullets!
Walt took a hit for 30 HP from Bandit and now has 70 HP!
Walt patched up and recovered 20 HP!
Jesse reloaded 3 bullets!
Jesse
 HP: 100
 Bullets: 6
Walt
 HP: 90
 Bullets: 5
 -----------------------------------
Gus has successfully hit Bandit and now has 3 bullets!
Walt was gunned down by Bandit!
Gus reloaded 3 bullets!
Gus
 HP: 100
 Bullets: 6
*/