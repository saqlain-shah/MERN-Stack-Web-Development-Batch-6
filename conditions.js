// conditional statements

let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let myName = prompt("Enter your name:");
const countvowels = (myName) => {
  let count = 0;
  for (const char of myName) { // for-of loop
    if ( // if statement
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