/*Create a JavaScript function createParagraph(id, text).
It creates a paragraph DOM element with text (the text value that has been passed as
an argument). After the element has been created it is appended to a
html element with id that has been passed as an argument in the function.*/

function createParagraph(id, text) {
    var createParagraph = document.createElement('p');
    var textNode = document.createTextNode(text);
    createParagraph.appendChild(textNode);
    document.getElementById(id).appendChild(createParagraph);
}

createParagraph('wrapper', 'some text');
createParagraph('wrapper', 'another text here');
createParagraph('wrapper', 'paragraph number 3');