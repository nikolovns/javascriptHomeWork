/*Write a JavaScript function findMostFreqNum(arr) that finds the most frequent number in an array.
 If multiple numbers appear the same maximal number of times, print the leftmost of them.
 Write JS program numberFinder.js that invokes your function with the sample input data below
 and prints the output at the console. Examples:*/



function findMostFreqNum(arr){
    var count = 0, dig, bestCount = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if(arr[i]===arr[j]) {
                count++;
            }
        }
        if(bestCount < count){
            bestCount = count;
            dig = arr[i];
        }
        count = 0;
    }
    console.log(dig + " (" + bestCount + " times)");
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);
findMostFreqNum([2, 1, 1, 5, 7, 1, 2, 5, 7, 3, 87, 2, 12, 634, 123, 51, 1]);
findMostFreqNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);


/*============== Second ==============*/
/*
function findMostFreqNum(arr){
    arr.sort();
    var count= 1, bestCount = 0, digit;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if(arr[i]===arr[j]) {
                count++;
            } else {
                break;
            }
        }
        if(bestCount < count) {
            bestCount = count;
            digit = arr[i];
        }
        count = 1;
        i = j - 1;
    }
    console.log(digit + " (" + bestCount + " times)");
}

findMostFreqNum([4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3]);*/
