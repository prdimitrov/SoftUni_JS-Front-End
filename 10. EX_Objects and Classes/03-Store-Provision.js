function exportStock(stock, delivery) {

    const getProducts = (list) => {
        const products = {};

        for (let i = 0; i < list.length; i += 2) {
            const product = list[i];
            const quantity = Number(list[i + 1]);

            if (!products[product]) {
                products[product] = 0;
            }

            products[product] += quantity;
        }
        return products;
    }

    // const store = getProducts(stock.concat(delivery));
    const store = getProducts([...stock, ...delivery]);

    Object.keys(store)
    .forEach(product => console.log(`${product} -> ${store[product]}`));
}

exportStock([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
console.log('--------------------------------');
exportStock([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);