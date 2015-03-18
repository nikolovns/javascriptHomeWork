function liNumbers(number) {
    var start = number[0];
    var end = number[1];
    console.log('<ul>');
    for (var i = start; i <= end; i++) {
        tableRow(i);
    }

    function tableRow() {
        var startRow = '<li><span class=\'num\'>';
        var stringNumber;
        for(var i in arguments) {
            startRow += arguments[i] + '</span>';
            stringNumber = arguments[i].toString();
            var firstSlice = 0;
            var secondSlice = 2;
            for (var j = 0; j < stringNumber.length; j++) {
                var firstNum = stringNumber.substring(firstSlice, secondSlice);
                var stringNum = stringNumber.substring(secondSlice);

                if (stringNum.indexOf(firstNum) > -1) {
                    startRow += '<a href="view.php?id=' + arguments[i] + '">View</a>'
                    break;
                }
                firstSlice++;
                secondSlice++;
            }
            startRow += '</li>';
            console.log(startRow);
        }
    }
    console.log('</ul>');
}

liNumbers([55555, 55560]);