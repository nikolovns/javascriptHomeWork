/*You are given an array of objects. Your task is to write a JavaScript code that filters out
the numbers of that array (removes all non-number objects). Then you should:
1. Find the Min number,
2. Find the Max number,
3. Find the most frequent number.
Finally you should print out the numbers you have found and the filtered array sorted in descending order. Example:*/


function numberArray(arr){
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        if(!isNaN(num)){
            array.push(num);
        }
    }
    array.sort(function(x, y) {
        return x < y;
    });
    var mostF = array[0];
    var count = 1;
    var bestCount = 0;
    var num = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[i] === mostF) {
            count++;
        } else {
            mostF = array[i];
            count = 1;
        }
        if(bestCount<count) {
            bestCount = count;
            num = array[i];
        }
    }

    var min = Math.min.apply(Math, array);
    var max = Math.max.apply(Math, array);
    console.log('Min number: ' + min);
    console.log('Max number: ' + max);
    console.log('Most frequent number: ' + num);
    console.log(array);

}

numberArray(["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);