/*Write a JavaScript function countDivs(html) to count the number of all DIVs in given HTML fragment passed as string.
Write a JS program countOfDivs.js that invokes your function and prints the output at the console.*/

function countDivs(html) {
    var regExer = /<div/gi;
    var mach;
    var count = 0;

    while (mach = regExer.exec(html)) {
        count++;
    }

    console.log(count);
}

var htmlString = '<!DOCTYPE html>\
    <html>\
    <head lang="en">\
<meta charset="UTF-8">\
<title>index</title>\
<script src="/yourScript.js" defer></script>\
</head>\
<body>\
<div id="outerDiv">\
<div class="first">\
<div><div>hello</div></div>\
</div>\
<div>hi<div></div></div>\
<div>I am a div</div>\
</div>\
</body>\
</html>';

countDivs(htmlString);