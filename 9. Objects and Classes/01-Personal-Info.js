// Вариант 1
// let person = {};
// person.firstName = firstName;
// person.lastName = lastName;
// person.age = age;

// Вариант 2
// let person = {firstName, lastName, age};

// Вариант 3
// let person = personInformation(firstName, lastName, age);


function personInformation(firstName, lastName, age) {
    let person = {};
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    return person;
}

personInformation("Peter",
    "Pan",
    "20");

personInformation("George",
    "Smith",
    "18");



