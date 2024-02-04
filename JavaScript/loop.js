// loops

// Print all th even numders from 0 to 20

console.log("Even numbers");
for (let i = 0; i <= 20; i++) { // for loop
    if (i % 2 === 0 ) {
        console.log(`num = ${i}`);
    }
}
//-------------------------------------------
// guess the number
let defaultNum = 34;
let userNum = prompt("Guess the game number.");
while (defaultNum !== userNum) { // while loop
  userNum = prompt("You guess a wrong number.Try again!");
}
console.log("Congratulations! you win.");

//----------------------------------------------------

 