// REST OPERATOR

function sum(name, ...args) {
    let sum = 0;
    for (let i in args) {
        sum += args[i];
    }
    console.log("name =", name);
    console.log("...args =", args);
    console.log("sum of ...args =", sum);
}
sum(2,4,5,6);
sum(5,6,7,8);

//----------------------------------------------
