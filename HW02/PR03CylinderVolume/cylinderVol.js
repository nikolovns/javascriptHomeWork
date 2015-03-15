function calcCylinderVol(arr){
    var vol = Math.PI * (Math.pow(arr[0], 2)) * arr[1];
    console.log(vol.toFixed(3));
}

var arr = calcCylinderVol([2, 4]);