function solve(input) {
    const heroes = [];

    for (const row of input) {
        const [name, level, items] = row.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items,
        };
        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    heroes
        .forEach(h => console.log(`Hero: ${h.name}
    level => ${h.level}
    items => ${h.items}`));
}

function fancySolve(input) {
    input
        .map(row => {
            const [name, level, items] = row.split(' / ');

            return {
                name,
                items,
                level: Number(level),
            };
        })
        .sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items}`);
        })
}

fancySolve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);
console.log('----------------');
fancySolve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
);