/*
 Create an HTML page that looks like the example below.
 Your task is to write a JavaScript function that shows and hides the invoice information
 if the checkbox “Желая фактура” is checked or not
*/

function checkForm () {
    var checkBox = document.getElementById('ch');
    var div = document.getElementById('hidden');
    if (checkBox.checked) {
        div.style.visibility = 'visible';
    } else {
        div.style.visibility = 'hidden';
    }
}
