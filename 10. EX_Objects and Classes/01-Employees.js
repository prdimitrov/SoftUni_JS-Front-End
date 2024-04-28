function employeesList(inputArr) {
    const employeesArr = [];

    for (const name of inputArr) {
        const employee = {
            name, 
            personalNumber: name.length,
        };
        employeesArr.push(employee)
    }

    employeesArr
    .forEach(element => 
        console
        .log(`Name: ${element.name} -- Personal Number: ${element.personalNumber}`));
}

employeesList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);
employeesList([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
);