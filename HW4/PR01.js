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