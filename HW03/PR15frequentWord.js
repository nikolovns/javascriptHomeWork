/*Write a JavaScript function findMostFreqWord(str) that finds the most frequent word in a text and prints it,
as well as how many times it appears in format "word -> count".
Consider any non-letter character as a word separator. Ignore the character casing. If several words have the
same maximal frequency, print all of them in alphabetical order. Write JS program frequentWord.js that invokes
your function with the sample input data below and prints the output at the console.*/

function findMostFreqWord(str) {
    var splitStr = str.toLowerCase().split(/[ ,.]+/).sort();
    var word = {};
    var count = 1;
    var bestCount = 0;
    var index;
    for (var i = 0; i < splitStr.length; i++) {
        for (var j = i+1; j < splitStr.length; j++) {
            if(splitStr[i]===splitStr[j]){
                count++;
            } else {

                break;
            }
        }
        index = splitStr[i];
        word[index] = count;
        count = 1;
        i = j-1;
    }
    var max = 0;
    for(var key in word){
        max = Math.max(word[key]);
    }

    for (var key in word){
        if(word[key] === max) {
            console.log(key + " -> " + word[key] + " times");
        }
    }
    console.log("\n");
}

findMostFreqWord('Hello my friend, hello my darling. Come on, come here. Welcome, welcome darling.');
findMostFreqWord('in the middle of the night');
findMostFreqWord('Welcome to SoftUni. Welcome to Java. Welcome everyone.');