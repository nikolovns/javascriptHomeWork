/*Write a JavaScript function printNumbers(number) that accepts as parameter an integer number.
The function finds all integer numbers from 1 to n that are not divisible by 4 or by 5.
Write a JS program numberChecker.js that invokes your function with the sample input data below
and prints the output at the console. Examples:*/

function printNumbers(number){
    var n = "";
    for (var i = 1; i <= number; i++) {
        if(i===4 || i===5) {
            continue;
        }
        n += i + ', ';
    }
    if(number < 1){
        console.log("no");
    } else {
        console.log(n);
    }
 }

 printNumbers(20);
 printNumbers(-5);
 printNumbers(13);