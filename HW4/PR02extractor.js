/*Write a JavaScript function sortLetters(string, boolean) that gets as an input a string and a boolean.
 The function sorts all letters in the string in alphabetical order and returns the newly formed string.
 The sorting is ascending if the boolean is true otherwise the sorting is in descending order. Example:
 Note: The sorting is case-insensitive but the output should use the same casing as the input!
 Hint: You are allowed to use .sort() function.*/


function sortLetters(string, bool) {
    var str = string.split('');

    if (bool === true) {
        str.sort(function (s1, s2) {
            s1 = s1.toLowerCase();
            s2 = s2.toLowerCase();
            return s1 > s2 ? 1 : (s1 < s2 ? -1 : 0);
        });
    } else {
        str.sort(function (s1, s2) {
            s1 = s1.toLowerCase();
            s2 = s2.toLowerCase();
            return s1 < s2 ? 1: (s1 > s2 ? -1 : 0);
        });
    }
    console.log(str.join(''));
}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);