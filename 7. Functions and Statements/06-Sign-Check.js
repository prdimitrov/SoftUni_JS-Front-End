function solve(a, b, c) {

    // a, b в multiply нямат общо с a, b в solve функцията
    const multiply = (a, b) => a * b;

    if (multiply(multiply(a, b), c) > 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }
}


solve(5, 12, -15);