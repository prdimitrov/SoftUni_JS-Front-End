function solve(input) {
    let encodedString = input.shift();

    let commandLine = input.shift();

    while (commandLine != 'Buy') {
        const [command, firstArg, secondArg] = commandLine.split('?');
        // Possible commands:
        // TakeEven
        // ChangeAll?{substring}?{replacement}"
        // Reverse?{substring}
        const substring = firstArg;
        const replacement = secondArg;
        switch (command) {
            case 'TakeEven':
                // The encoded message is changed to consist only of 
                // its characters at even indices. 
                // Then, the updated message is printed
                let newString = '';
                for (let i = 0; i < encodedString.length; i++) {
                    if (i % 2 == 0) {
                        newString += encodedString[i];
                    }
                }
                encodedString = newString;
                console.log(encodedString);
                break;
            case 'ChangeAll':
                // Changes all occurrences of the given substring 
                // in the message with the replacement text 
                // and then prints the message.

                // const substring = firstArg;
                // const replacement = secondArg;
                encodedString = encodedString.split(substring).join(replacement);
                console.log(encodedString);
                break;
            case 'Reverse':
                // - If the message contains the given substring, 
                //      cut it out, 
                //      reverse it and add it at the end of the message. 
                //      Then, print the updated message.   
                // - Otherwise, print "error".
                // - This operation should replace only the first occurrence 
                //      of the given substring if there are two or more occurrences.
                if (encodedString.includes(substring)) {
                    // TODO: First way!
                    //        // Find the index of the first occurrence
                    //        const index = encodedString.indexOf(substring);
                    //        // Remove the substring from the encodedString
                    //        encodedString = encodedString.slice(0, index) + encodedString.slice(index + substring.length);
                    //        const reversedSubstring = substring.split('').reverse().join('');
                    //        encodedString += reversedSubstring;
                    //        console.log(encodedString);
                    encodedString = encodedString.replace(substring, '') + substring.split('').reverse().join('');
                    console.log(encodedString);
                } else {
                    console.log('error');
                }
                break;
        }

        commandLine = input.shift();
    }
    console.log('The cryptocurrency is: ' + encodedString);
}

solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"])
);
console.log('-------------------------');
solve((["PZDfA2PkAsakhnefZ7aZ",
    "TakeEven",
    "TakeEven",
    "TakeEven",
    "ChangeAll?Z?X",
    "ChangeAll?A?R",
    "Reverse?PRX",
    "Buy"])
);