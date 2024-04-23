// Write a function that calculates how much money you need to buy fruit. 
// You will receive a string for the type of fruit you want to buy, 
// a number for weight in grams, and another number for the price per kilogram. 

function moneyNeeded(fruit, grams, priceForKilo) {
    console.log(`I need $${(priceForKilo * (grams / 1000)).toFixed(2)} to buy ${(grams / 1000).toFixed(2)} kilograms ${fruit}.`);
}

moneyNeeded('orange', 2500, 1.80);
moneyNeeded('apple', 1563, 2.35);