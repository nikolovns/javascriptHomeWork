/*
Write a JavaScript function createArray() that allocates array of 20 integers and initializes
each element by its index multiplied by 5.
Write JS program arrayBuilder.js that invokes your and prints the output at the console.*/

function createArray() {
 var array = new Array(20);
 for (var i = 0; i < array.length; i++) {
 array[i] = i*5;
 }
 var str = array.join(', ');
 console.log(str);
 }

 createArray();
