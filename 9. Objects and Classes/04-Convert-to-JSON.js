/*
Write a function that receives a 
first name, last name, hair color 
and sets them to an object.
Convert the object to JSON string 
and print it.
*/

function convertToJson(name, lastName, hairColor) {
let person = {name, lastName, hairColor};
console.log(JSON.stringify(person));
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');