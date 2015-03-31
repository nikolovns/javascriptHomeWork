/*Create a JavaScript object named HTMLGenerator. The object has a couple of functions attached to it:

 createParagraph(id, text) -> creates a <p></p> HTML element that is attached to the id of the element,
 passed as an argument. The paragraph’s text is passed as an argument of the function as well.

 createDiv(id, class)  -> creates a <div></div> HTML element that is attached to the id of the element,
  passed as an argument. The div’s class is passed as an argument of the function as well.

 createLink(id, text, url) -> creates a <a></a> HTML element that is attached to the id of the element,
  passed as an argument. The link’s text and url are passed as arguments of the function as well.*/


var htmlGenerator = {
    createParagraph : function (id, text) {
        var createPar = document.createElement('p');
        var textNode = document.createTextNode(text);
        createPar.appendChild(textNode);
        document.getElementById(id).appendChild(createPar);
    },
    createDiv : function (id, divClass) {
        var createElementDiv = document.createElement('div');
        createElementDiv.className = divClass;
        document.getElementById(id).appendChild(createElementDiv);
    },
    createLink : function (id, text, href) {
        var createA = document.createElement('a');
        createA.href = href;
        var textNode = document.createTextNode(text);
        createA.appendChild(textNode);
        document.getElementById(id).appendChild(createA);
    }
};

htmlGenerator.createParagraph('wrapper', 'Soft Uni');
htmlGenerator.createDiv('wrapper', 'section');
htmlGenerator.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');

