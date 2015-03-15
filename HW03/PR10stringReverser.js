/*Write a JavaScript function reverseString(str) that reverses string and returns it.
Write JS program stringReverser.js that invokes your function with the sample
input data below and prints the output at the console.*/

function reverseString(str) {
    return str.split('').reverse().join('');
}

var reverse = reverseString('sample');
console.log(reverse);