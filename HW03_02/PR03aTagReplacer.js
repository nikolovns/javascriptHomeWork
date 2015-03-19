/*Write a JavaScript function replaceATag(str) that replaces in a HTML document given as string
all the tags <a href="…">…</a> with corresponding tags
[URL=…]…/URL].
Write JS program aTagReplacer.js that invokes your function with the sample input data below
and prints the output at the console.*/

function replaceATag(str) {
    var newStr = /(<a.*? href)=(\'|\"|)(.*?)\2>([^<]+)(<\/a>)/g;
    var replaceUrl = str.replace(newStr, '[URL =$3]$4[/URL]');
    console.log(replaceUrl);
}

replaceATag('<ul><li><a href=http://softuni.bg>SoftUni</a></li></ul>');