/*Write a JavaScript function findYoungestPerson(array) that accepts as parameter an array of people,
finds the youngest person that has a smartphone and returns his full name.
Write a JS program youngestPerson.js to execute your function for the below
examples and print the result at the console.*/

function findYoungestPerson(people) {
    var min = 0;
    var minAge = Number.MAX_VALUE;
    var name = '';
    for (var key in arguments) {
        for(var key2 in arguments[key]){
            if (arguments[key][key2].hasSmartphone === true) {
                min = arguments[key][key2].age;
            } else {
                continue;
            }
            if (minAge > min) {
                minAge = min;
                name = arguments[key][key2].firstname + ' ' + arguments[key][key2].lastname;
            }
            min = 0;
        }
    }
    console.log(name);
}

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

findYoungestPerson(people);