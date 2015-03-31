/*Write a HTML page holding a text field, a div and a button.
Write a JavaScript function that is called when the button is clicked.
The function copies the value of the text field and pastes it in the div.
If the value of the text field is a valid email (containing a ‘@’ character and a
domain e.g. ‘softuni.bg’), the div’s background is set to light green.
If the value of the text field is an invalid email, the div’s background is set to red.*/

function validateEmail () {
    var emailValid = document.getElementById('email');
    var email = emailValid.value;
    var div = document.getElementById('is-email');
    document.getElementById('is-email').innerHTML = emailValid.value;
    var regEx = /[\w][^ ]+@[\w.\-]+\.[A-Za-z]+/gi;
    var res = regEx.test(email);
    if (res !== true) {
        div.style.backgroundColor = "red";
    } else {
        div.style.backgroundColor = 'lightgreen';
    }
}