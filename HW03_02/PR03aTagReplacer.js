/*Write a JavaScript function replaceATag(str) that replaces in a HTML document given as string
all the tags <a href="…">…</a> with corresponding tags
[URL=…]…/URL].
Write JS program aTagReplacer.js that invokes your function with the sample input data below
and prints the output at the console.*/


function replaceATag(str) {

    var replaceA = str.replace('<a', '[URL');
    var positionURL = replaceA.indexOf('[');
    var positionAfterURL = replaceA.indexOf('>', positionURL);
    replaceA = replaceA.substr(0, positionAfterURL) + ']' + replaceA.substr(positionAfterURL + 1);
    replaceA = replaceA.replace('</a>', '[/URL]');

    console.log(replaceA);
}

replaceATag('<ul> <li> <a href=http://softuni.bg>SoftUni</a> </li> </ul>');