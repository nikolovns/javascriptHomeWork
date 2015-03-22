/*Write a JavaScript function clone(obj) that accepts as parameter an object of reference type.
 The function should return a deep copy of the object.
 Write a second function compareObjects(obj, objCopy) that compare the two objects by reference (==) and print on the
 console the output given below. Read in Internet about "deep copy" of an object and how to create it. Examples:*/


//Not deep copy
//I use different names for the functions
function clone1(obj) {
    var newObj = obj;
    return newObj;
}

var a1 = {name: 'Pesho', age: 21};
var b1 = clone1(a1);
//change the name of the second object, this will change all names
b1.name = 'Pepi';
compareObjects(a1, b1);


//Deep copy function
function clone(obj) {
    if ( !(obj instanceof Object) ) {
        return obj;
    }

    var cloneObject = obj.constructor();
    for (var key in obj) {
        cloneObject[key] = clone(obj[key]);
    }
    return cloneObject;
}

var a = {name: 'Pesho', age: 21};
var b = clone(a);

//change the name of the second object - will change only this name.
b.name = 'Pepi';

//print - all results
function compareObjects(obj, objCopy) {
    console.log(a == b ? 'a == b --> ' + true : 'a == b --> ' + false);
}

compareObjects(a, b);

//just for test print the objects from first and second functions
console.log('first function');
console.log(a1);
console.log(b1);
console.log('second function');
console.log(a);
console.log(b);