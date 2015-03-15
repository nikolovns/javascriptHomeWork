function quadratic(arr) {
    var discriminant = Math.sqrt(Math.pow(arr[1], 2) - 4 * arr[0] * arr[2]);
    if(discriminant === 0) {
        var root = -arr[1] / (2 * arr[0]);
        console.log("X = " + root);
    }
    else if (discriminant > 0){
        var rootA = (-arr[1] - discriminant) / (2 * arr[0]);
        var rootB = (-arr[1] + discriminant) / (2 * arr[0]);
        console.log("X1 = " + rootA + "\n" + "X2 = " + rootB);
    }
    else {
        console.log("No real rots");
    }
}

quadratic([2, 5, -3]);
quadratic([2, -4, 2]);
quadratic([4, 2, 1]);

