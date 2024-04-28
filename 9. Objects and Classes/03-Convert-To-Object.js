function fromJson(jsonInput) {
    let person = JSON.parse(jsonInput);

    let entries = Object.entries(person);
    for (const [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}


fromJson('{"name": "George", "age": 40, "town": "Sofia"}');
fromJson('{"name": "Peter", "age": 35, "town": "Plovdiv"}');