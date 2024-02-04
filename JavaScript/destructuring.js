// Destructuring Object
// assigning object attributes to variables
const person = {
  myName: "Jalal",
  age: 25,
  gender: "Male",
};

// destructuring assignment
let { myName, age, gender } = person;
console.log(person);
console.log(myName); // Jalal
console.log(age); // 25
console.log(gender); // Male

//--------------------------------------------
// Destructuring Array

const user = ["Jalal", 20, "Skardu"];
// destructuring assignment in arrays
const [name3, age3, coutry] = user;

console.log(name3); // Jalal
console.log(age3); // 20
console.log(city); // Skardu

// Assign Default Values

let arrValue1 = [10];

// assigning default value 5 and 7
let [a = 5, b = 7] = arrValue1;

console.log(a); // 10
console.log(b); // 7

// ----------------------------------
const person1 = {
  name1: "Jalal",
};

// assign default value 26 to age if undefined
const { name1, age1 = 26 } = person;

console.log(name1); // Jalal
console.log(age1); // 2

// Assign Remaining Elements to a Single Variable
// You can assign the remaining elements of an array to a variable using the 'spread' syntax "...".
const arrValue2 = ["one", "two", "three", "four"];

// destructuring assignment in arrays
// assigning remaining elements to y
const [c, ...d] = arrValue2;

console.log(c); // one
console.log(d); // ["two", "three", "four"]

// You can also assign the rest of the object properties to a single variable

const person2 = {
  name2: "Jalal",
  age2: 25,
  gender2: "Male",
};

// destructuring assignment
// assigning remaining properties to rest
let { name2, ...rest } = person;

console.log(name2); // Jalal
console.log(rest); // {age2: 25, gender2: "Male"}

// ---------------------------------------------------
