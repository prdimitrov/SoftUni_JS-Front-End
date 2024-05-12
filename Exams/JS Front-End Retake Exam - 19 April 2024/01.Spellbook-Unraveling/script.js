function solve(inputArr) {
    let information = inputArr.shift();

    let commandLine = inputArr.shift();
    while (commandLine != 'End') {

        let command = commandLine.split('!');

        switch (command[0]) {
            case 'RemoveEven':
                let newText = '';
                for (let i = 0; i < information.length; i++) {
                    if (i % 2 == 0) {
                        newText += information.charAt(i);
                    }
                }
                information = newText;
                console.log(information);
                break;
            case 'TakePart':
                // Selects a portion of the spell specified by two numbers, 
                // unveiling a segment of 
                // its hidden power and then prints the spell
                information = information.substring(command[1], command[2]);
                console.log(information);
                break;
                case 'Reverse':
                    let substringToReverse = command[1];
                    let index = information.indexOf(substringToReverse);
                    if (index !== -1) {
                        let reversedSubstring = substringToReverse.split('').reverse().join('');
                        information = information.substring(0, index) + information.substring(index + substringToReverse.length) + reversedSubstring;
                        console.log(information);
                    } else {
                        console.log("Error");
                    }
                    break;
        }
        commandLine = inputArr.shift();
    }
    console.log(`The concealed spell is: ${information}`);
}


solve(["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"])
    ;
console.log('------------------');
solve(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"])
    ;