function phone(input) {
    let phonebook = {};

    for (const line of input) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let phoneNumber = tokens[1];
        phonebook[name] = phoneNumber;
    }
    for (let key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`);
    }

}

phone(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);

phone(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);