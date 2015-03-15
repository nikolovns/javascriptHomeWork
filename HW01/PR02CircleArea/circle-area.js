function area(r) {
    return circleArea = Math.PI * Math.pow(r, 2);
    
}

document.getElementById("first").innerHTML = area(7);
document.getElementById("second").innerHTML = area(1.5);
document.getElementById("third").innerHTML = area(20);