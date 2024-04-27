function solve(password) {
    const isValidLength = password => password.length >= 6 && password.length <= 10;
    const isAlphaNumerical = password => /^[a-zA-Z0-9]+$/.test(password);
    // .test Връща boolean и лесно работи с regex!
    const isStrong = password => password
        .split('')
        .filter(character => Number.isInteger(Number(character)))
        .length >= 2;

        let isValid = true;

    if (!isValidLength(password)) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }

    if (!isAlphaNumerical(password)) {
        isValid = false;
        console.log('Password must consist only of letters and digits');
    }

    if (!isStrong(password)) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }

    if (isValid) {
        console.log('Password is valid');
    }
}



solve('logIn');
solve('MyPass123');
solve('Pa$s$s');