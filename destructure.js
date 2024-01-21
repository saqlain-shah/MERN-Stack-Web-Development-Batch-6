let [a,b]=[12,13];
console.log(`value of ${a}`);
let obj={
    name:"anjum",
    Age:20,
    Section:"A"
}
const {name,Age,Section}=obj;
console.log(Age);

// Define a function with two regular parameters and one rest parameter:
// function myBio(firstName, lastName, ...otherInfo) { 
//     return otherInfo;
//   }
  
//   // Invoke myBio function while passing five arguments to its parameters:
//   myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");
  
//   // The invocation above will return:
//   ["CodeSweetly", "Web Developer", "Male"];
//   console.log(myBio);
// Define a destructuring array with two regular variables and one rest variable:
const [firstName, lastName, ...otherInfo] = [
    "Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male"
  ];
  
  
  console.log(otherInfo); 
  
  
  ["Code Sweetly", "Web Developer", "Male"]

  function sum(...a){
    let total=0;
    for(const ab of a){
        total+=ab;
    }
    return total;
  }
  console.log( `sum of three value ${sum(1,2,3,4)}`);
  console.log( `sum of five value ${sum(1,2,3,4,5)}`);
  console.log( `sum of six value ${sum(1,2,3,4,5,6)}`);



  const numbers = [1, 3, 5, 7];
  console.log(...numbers);

  let obj1={
  ab:20,
  b:3,
  c:4,
  d:32,
  e:30
}
const {ab ,...other}=obj1;
console.log(ab);
console.log(other);
