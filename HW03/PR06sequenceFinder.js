/*Write a JavaScript function findMaxSequence(arr) that finds the maximal sequence of equal
 elements in an array and returns the result as an array.
 If there is more than one sequence with the same maximal length, print the rightmost one.
 Write JS program sequenceFinder.js that invokes your function with the sample input data
 below and prints the output at the console.*/

function findMaxSequence(arr){
    var index = 0;
    var len = 0;
    var bestLen = 0;
    for (var i = 0; i < arr.length; i++) {
        var j = i;
        while(arr[i]===arr[j]){
            len++;
            j++;
            if(j>=arr.length){
                break;
            }
        }
        if (bestLen<=len) {
            bestLen = len;
            index = i;
        }
        i=j-1;
        len=0;
    }
    var array = [];
    for (var i = index; i < index+bestLen; i++) {
        array.push(arr[i]);
    }
    console.log(array);
}

findMaxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
findMaxSequence(['happy']);
findMaxSequence([2, 'qwe', 'qwe', 3, 3, '3']);