function solve(numbers) {
    // numbers.forEach(number => console.log(isPalindrome(number)));
    numbers.forEach(printPalindromeResult);
    
    function printPalindromeResult(number) {
        console.log(isPalindrome(number));
    }
    // Check isPalindrome
    function isPalindrome(number) {
        const forwardNumber = number.toString();
        const backwardNumber = forwardNumber.split('').reverse().join(''); 
        
        return forwardNumber === backwardNumber;
        // console.log(digits);
        // console.log(reverseddigits);
    }

}

solve([123,323,421,121]);
solve([32,2,232,1010]);