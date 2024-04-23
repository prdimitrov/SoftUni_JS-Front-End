function vacation(group, typeOfGroup, dayOfWeek) {
    let price;
    if (typeOfGroup === 'Students') {
        if (dayOfWeek === 'Friday') {
            price = 8.45;
        } else if (dayOfWeek === 'Saturday') {
            price = 9.80;
        } else if (dayOfWeek === 'Sunday') {
            price = 10.46;
        }
        if (group >= 30) {
            price -= price * 0.15;
        }
        price *= group;
    } else if (typeOfGroup === 'Business') {
        if (dayOfWeek === 'Friday') {
            price = 10.90;
        } else if (dayOfWeek === 'Saturday') {
            price = 15.60;
        } else if (dayOfWeek === 'Sunday') {
            price = 16;
        }
        if (group >= 100) {
            let free = Math.min(10, group);
            price -= (price / group) * free;
        }
        price *= group;
    } else if (typeOfGroup === 'Regular') {
        if (dayOfWeek === 'Friday') {
            price = 15;
        } else if (dayOfWeek === 'Saturday') {
            price = 20;
        } else if (dayOfWeek === 'Sunday') {
            price = 22.50;
        }
        if (group >= 10 && group <= 20) {
            price -= price * 0.05;
        }
        price *= group;
    }

    return console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");