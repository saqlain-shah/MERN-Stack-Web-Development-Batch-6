// spread operator
function sum(name, ...args) { //Here ...args is rest operator. 
    let sum = 0;
    for (let i in args) {
        sum += args[i];
    }
    console.log(`name = ${name}`);
    console.log(`...args = ${args}`);
    console.log(`sum of ...args = ${sum}`);
}
let arr = [2,4,5,6]
sum("Jalal", ...arr); // Here ...arr is spread operator
sum("Jalal", 5,6,7,8);

// for object
let obj1 = {
    name : "Jalal Hussain",
    course : "Advance JavaScript"
};

let obj2 = {
    age : 23,
};

let obj3 = {...obj1, ...obj2}; // spread operator

console.log(obj3);