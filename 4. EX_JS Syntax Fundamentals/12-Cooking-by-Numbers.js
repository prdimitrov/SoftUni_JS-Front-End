// Write a program that receives 6 parameters which are a number and a list of five operations. 
// Perform the operations sequentially by starting with the input number and using the result 
// of every operation as a starting point for the next one. Print the result of every operation in order. 
// The operations can be one of the following:
// •	chop - divide the number by two
// •	dice - square root of a number
// •	spice - add 1 to the number
// •	bake - multiply number by 3
// •	fillet - subtract 20% from the number
// The input comes as 6 string elements. 
// The first element is the starting point and must be parsed to a number. 
// The remaining 5 elements are the names of the operations to be performed.
// The output should be printed on the console.

function cookingNumbers(number, action1, action2, action3, action4, action5) {
    let result = parseFloat(number);
    let actions = [action1, action2, action3, action4, action5];

    actions.forEach(action => {
        if (action === 'chop') {
            result /= 2;
        } else if (action === 'dice') {
            result = Math.sqrt(result);
        } else if (action === 'spice') {
            result += 1;
        } else if (action === 'bake') {
            result *= 3;
        } else if (action === 'fillet') {
            result -= (result * 0.2);
        }
        console.log(result);
    });
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');