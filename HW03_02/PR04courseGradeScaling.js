/*You are given a JSON string containing an array of Students (Objects).
 Your task is to scale their scores upwards by increasing them with 10%.
 After that you should add a field that shows whether the student has passed
 or failed the exam (passed exam means 100 or more points at the exam).
 Finally you should filter out only the students that have passed the exam and print them out sorted alphabetically.*/

function score(jObject) {

    var stringJson = JSON.parse(jObject);

    stringJson.sort(function (a, b){
        var nameA=a.name, nameB=b.name;
        return nameA > nameB;
    });

    var newString = "";
    for(var key in stringJson) {
        var val = stringJson[key]['score'];
        val += (val * 0.1);
        stringJson[key]['score'] = val;
        if(stringJson[key]['score'] < 100) {
            stringJson.splice(key, 1);
        }
    }

    for (var key in stringJson) {
        if (stringJson[key]['hasPassed'] === undefined) {
            stringJson[key]['hasPassed'] = 'true';
        }
    }
    var jsonObject = JSON.stringify(stringJson);
    console.log(jsonObject);
}

var text = [
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
];

var object = JSON.stringify(text);
score(object);