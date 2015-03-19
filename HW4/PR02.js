function sortLetters(string, bool) {
    var str = string.split('');

    if (bool === true) {
        str.sort(function (s1, s2) {
            s1 = s1.toLowerCase();
            s2 = s2.toLowerCase();
            return s1 > s2 ? 1 : (s1 < s2 ? -1 : 0);
        });
    } else {
        str.sort(function (s1, s2) {
            s1 = s1.toLowerCase();
            s2 = s2.toLowerCase();
            return s1 < s2 ? 1: (s1 > s2 ? -1 : 0);
        });
    }
    console.log(str.join(''));
}

sortLetters('HelloWorld', true);
sortLetters('HelloWorld', false);