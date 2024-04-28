function cityInfo(information) {
    let city = Object.entries(information);

    for (const [key, value] of city) {
        console.log(`${key} -> ${value}`);
    }
}



cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
);

cityInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
);