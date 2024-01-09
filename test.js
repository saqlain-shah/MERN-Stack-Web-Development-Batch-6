console.log("Hello Jalal Hussain");
const a = 2;
const myName = "Jalal HUssain";
const isMale = true;
console.log(a);
console.log("Name =", myName);
console.log("isMale =", isMale);

{
  let a = 10;
  // let a = 23;
  console.log(a);
}
{
  let a = 2;
  let b = 67;
  console.log(a);
  console.log("inside block  b =", b);
}
{
  // var a = 10;
  // const a = 45;
  var b = 34;
  // let a = 23;
  // console.log(a);
  console.log("inside block  b =", b);
}

console.log("outside block  b =", b);

//object

let person = {
  fullName: "Jalal Hussain",
  age: 25,
  isMale: true,
};

let person1 = {
  fullName1: "Jamal Hussain",
  age1: 20,
  isMale1: true,
};
person = person1;
console.log(person);  

// array
let marks = [23, 34, 46, 56];
 
console.log(marks);