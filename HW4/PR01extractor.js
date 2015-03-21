/*Write a JavaScript function extractObjects(array).
As a function argument you are given an array of different objects with different data types .
Your task is to write the JavaScript function that filters out the Objects (all primitive data type
objects and arrays are filtered) and returns a new array with the extracted elements. Example:
 Note: Try to write the filter algorithm yourself and not use .filter() function. (Hint: Use procedural for loop)*/


function extractObjects(array) {
    var newArray = [];
    var type = 'object';

    for (var i = 0; i < array.length; i++) {
        if (array[i] instanceof Object && !(array[i] instanceof Array) ) {
            newArray.push(array[i]);
        }
    }

    console.log(newArray);
}

extractObjects([
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
]);