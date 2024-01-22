var a = [10, 20, 30, 40, 50];
var b = [60, 70, 80, 90, 100];
//var c = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

var spread = [...a, ...b];
console.log("Spread Operator", spread);

console.log(a);
console.log(b);
var d = a.concat(b);
console.log("Array d: ", d);
var e = a.join(b);
console.log("Array e: ", e);

var f = [a] + [b];
console.log("Array f: ", f);
