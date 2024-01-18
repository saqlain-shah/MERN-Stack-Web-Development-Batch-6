console.log("Hello Jalal Hussain");

// //block scope
// {
//   let a = 10;
//   // let a = 23;
//   console.log(a);
// }
// {
//   let a = 2;
//   let b = 67;
//   console.log(a);
//   console.log("inside block  b =", b);
// }
// {
//   // var a = 10;
//   // const a = 45;
//   var b = 34;
//   // let a = 23;
//   // console.log(a);
//   console.log("inside block  b =", b);
// }

// console.log("outside block  b =", b);

// //object

// const student = {
//   fullName: "Jalal Hussain",
//   age: 25,
//   isPass: true,
//   marks: [
//     {
//       Phy: {
//         Theory: 60,
//         Practical: 30,
//       },
//     },
//     {
//       Chem: {
//         Theory: 78,
//         Practical: 40,
//       },
//     },
//     {
//       Bio: {
//         Theory: 89,
//         Practical: 50,
//       },
//     },
//     { urdu: 90 },
//   ],
// };
// student.age = 34;
// console.log(student);

// const student2 = {
//   fullName: "Ali Hussain",
//   age: 20,
//   isPass: true,
// };
// console.log(student);

// // array
// let marks = [23, 34, 46, 56];
// console.log(marks);

//----------------------------------------------------------------------
// // OPERATORS
// let num1 = 6;
// let num2 = 3;
// if (num1 !== num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Arithematic operators
// let sum = num1 + num2;
// console.log("sum =", sum); // 9

// let diff = num1 - num2;
// console.log("difference =", diff); // 3

// let div = num1 / num2;
// console.log("division =", div); // 2

// let mult = num1 * num2;
// console.log("multiplication =", mult); // 18

// let mod = num1 % num2;
// console.log("modulus =", mod); // 0

// let exp = num1 ** num2;
// console.log("exponantion =", exp); // 216

// //Unary operators

// let num1 = 6;
// let num2 = 3;
// // increment
// console.log("after pre-incremement num1(in the same line) =", ++num1); // 7
// console.log("after pre-incremement num1 (in another line) =", num1); // 7
// console.log("after post-incremement num1 (in the same line) =", num1++); // 7
// console.log("after post-incremement num1 (in another line) =", num1); // 8
// // decrement
// console.log("after pre-decremement num1(in the same line) =", --num1); // 7
// console.log("after pre-decremement num1 (in another line) =", num1); // 7
// console.log("after post-decremement num1 (in the same line) =", num1--); // 7
// console.log("after post-decremement num1 (in another line) =", num1); // 6

// // Assignment operators

// let num1 = 6;
// let num2 = 3;

// num1 += 2;
// console.log("num1 += 2 =", num1); // 8

// num1 -= 2;
// console.log("num1 -= 2 =", num1); // 6

// num1 *= 2;
// console.log("num1 *= 2 =", num1); // 12

// num1 %= 2;
// console.log("num1 %= 2 =", num1); // 0

// num2 **= 2;
// console.log("num1 **= 2 =", num2); // 9

//Comparison Operators

// let num1 = 6;
// let num2 = 3;
// console.log("6 == 3", num1 == num2); // false
// console.log("6 != 3", num1 != num2); // true
// console.log("6 === 3", num1 === num2); // false
// console.log("6 !== 3", num1 !== num2); // true

// let num1 = 6;
// let num2 = "6";

// console.log("6 == "6" ", num1 == num2); // true
// console.log("6 != "6" ", num1 != num2); // false
// console.log("6 === "6" ", num1 === num2); // false
// console.log("6 !== "6" ", num1 !== num2); // true

// let num1 = 6;
// let num2 = 4;

// console.log("6 >  4", num1 > num2); // true
// console.log("6 >= 4", num1 >= num2); // false
// console.log("6 <  4", num1 < num2); // true
// console.log("6 <= 4", num1 <= num2); // false

// // Logical Operators

// let num1 = 6;
// let num2 = 4;

// let cond1 = num1 > num2; //true
// let cond2 = num1 === 6; //true
// console.log("cond1 && cond2 =", cond1 && cond2); //true
// console.log("cond1 && cond2 =", cond1 || cond2); //true

// cond1 = num1 < num2; //false
// cond2 = num1 === 6; //true
// let cond3 = num2 === num1; //false
// console.log("cond1 && cond2 =", cond1 && cond2 && cond3); //false
// console.log("cond1 && cond2 =", cond1 || cond2 || cond3); //true

// FUNCTION

// function add(a, b) {
//   console.log("Sum of two numbers");
//   let sum = a + b;
//   console.log(`sum = ${sum}`);
// }

// let num1 = 2;
// let num2 = 4;
// add(num1, num2);
//console.log("Hello Jalal Hussain");
// const a = 2;
// const myName = "Jalal HUssain";
// const isMale = true;
//console.log(a);
//console.log("Name =", myName);
//console.log("isMale =", isMale);

// {
//   // let a = 10;
//   // let a = 23;
//   // console.log(a);
// }
// {
//   let a = 2;
//   let b = 67;
  // console.log(a);
  //console.log("inside block  b =", b);
// }
// {
  // var a = 10;
  // const a = 45;
  // var b = 34;/
  // let a = 23;
  // console.log(a);
  // console.log("inside block  b =", b);
// }

//console.log("outside block  b =", b);

// // Arrow function
// let mult = (a, b) => {
//   console.log("product of two numbers");
//   let prod = a * b;
//   console.log(`product = ${prod}`);
// };

// mult(2, 3);
//console.log(student);

// let person2 = {
//   fullName: "Jamal Hussain",
//   age: 20,
//   isMale: true,
// };
// // person = person1;
// console.log(person2);

// array
// let marks = [23, 34, 46, 56];

//console.log(marks);

// let num1 = 1;
// let num2 = 2;
// //let sum = ++num1 + --num2;
// //console.log(sum);+
// if (num1 !== num2) {
//   console.log("True");
// } else console.log("False");

// if (num1 > num2 && num2 + 1 == num2) {
//   console.log("True");
// } else console.log("False");
// if (num1 + num2 || num1++ > num2) {
//   console.log("True");
// } else console.log("False");

// Loops in JavaScript

let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let myName = prompt("Enter your name:");
const countVowels = (myName) => {
  let count = 0;
  for (const char of myName) { // for-of loop
    if (
      char === vowels[0] ||
      char === vowels[1] ||
      char === vowels[2] ||
      char === vowels[3] ||
      char === vowels[4] ||
      char === vowels[5] ||
      char === vowels[6] ||
      char === vowels[7] ||
      char === vowels[8] ||
      char === vowels[9] ||
      char === vowels[10]
    ) {
      count++;
    }
  }
  return(count);
};

console.log(`Number of vowels in '${myName}' is ${countVowels(myName)}.`);