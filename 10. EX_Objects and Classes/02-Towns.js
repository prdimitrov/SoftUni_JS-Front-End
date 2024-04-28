function townsList(inputArr) {
    const townsArr = [];

    for (const element of inputArr) {
        const [townName, townLatitude, townLongitude] = element.split(' | ');
        const town = {
            town: townName, 
            latitude: Number(townLatitude).toFixed(2), 
            longitude: Number(townLongitude).toFixed(2),
        };
        townsArr.push(town);
    }

    townsArr.forEach(t => console.log(t));
}

townsList(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);
console.log('-------------------------------');
townsList(['Plovdiv | 136.45 | 812.575']);