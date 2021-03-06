/*
 Write a JavaScript function findMinAndMax(arr) that accepts as parameter an array of numbers.
 The function finds the minimum and the maximum number.
 Write a JS program minMaxNumbers.js that invokes your function with the sample
 input data below and prints the output at the console.*/


function findMinAndMax(arr){
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    console.log('Min -> ' + min + '\n' + 'Max -> ' + max);
}

findMinAndMax([1, 2, 1, 15, 20, 5, 7, 31]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);