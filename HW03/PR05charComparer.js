/*Write a JavaScript function compareChars(arr1, arr2) that compares two arrays of chars lexicographically
(letter by letter). Write JS program charComparer.js that invokes your function with the sample
input data below and prints the output at the console. */

function compareChars(arr1, arr2){
    if(arr1.length !== arr2.length){
        console.log("Not Equal");
    } else {
        for (var i = 0; i < arr1.length; i++) {
            if(arr1[i]!==arr2[i]){
                console.log("Not Equal");
                break;
            }
            if(i+1===arr1.length){
                console.log("Equal");
            }
        }
    }

}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'],
    ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);

compareChars(['3', '5', 'g', 'd'],
    ['5', '3', 'g', 'd']);

compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
    ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);