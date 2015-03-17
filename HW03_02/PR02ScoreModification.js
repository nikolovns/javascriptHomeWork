/*You are given an array of floating point numbers.
Your task is to filter out all valid exam scores (between 0 and 400) and scale them downwards by removing 20% out of each score.
Finally you should print out the changed scores sorted in ascending order. */


function filterNum(array) {
    var filterArray = [];
    /*var filterArray = array.filter(function(element){
        return element >= 0 && element <= 400;
    });*/
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i] - (array[i] * 0.2);
        filterArray = array.filter(function(element){
            return element >= 0 && element <= 400;
        });
        filterArray.sort(function(x, y){
            return x > y;
        });
    }

    console.log(filterArray);
}



filterNum([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);