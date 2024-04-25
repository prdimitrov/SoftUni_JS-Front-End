function solve(product, quantity) {
    const productPrice = getProductPrice(product);
    const totalPrice = productPrice * quantity;
    console.log(totalPrice.toFixed(2));
    function getProductPrice(product) {
        switch (product) {
            case 'coffee':
                return 1.5;
            // break;
            case 'water':
                return 1;
            // break;
            case 'coke':
                return 1.4;
            // break;
            case 'snacks':
                return 2;
            // break;
        }
    }
}

solve('water', 5);
