function calcExpression(){
    var input = document.getElementById("input");
    document.getElementById('output').innerHTML = eval(input.value);
}

