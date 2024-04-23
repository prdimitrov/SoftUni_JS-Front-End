// Write a function that receives a string and two numbers. 
// The numbers will be a starting index and count of elements to substring. 
// Print the result.

function substringFunction(text, start, end) {
console.log(text.substring(start, start + end));
}

substringFunction('ASentence', 1, 8);
substringFunction('SkipWord', 4, 7);