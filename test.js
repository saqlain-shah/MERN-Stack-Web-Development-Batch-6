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