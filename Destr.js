let person={
    name1: "Ashraf",
    from: "Khp",
    dist: "ghancha",
    uni: "UOBS",
}
let{name1,from,dist,uni}=person;
console.log(name1,from);

let person2 = {name: "Ali", country: "India", job: "Developer"};
let {name: foo, job: bar} = person2;
console.log(foo);
console.log(bar);

let person3 = {name2: "Sarah", country: "Afghan", job: "Developer",friends: ["Annie", "Becky"]};

let {name2, friends, ...others} = person3;

console.log(name2);
console.log(friends);
console.log(others);

const { firstName, lastName, ...otherInfo } = {
    firstName: "Zamin",
    lastName: "Zesheen", 
    companyName: "CodeSweetly",
    profession: "Web Developer",
    gender: "Male"
  }
  
  console.log(otherInfo);

const myName = ["AKBER", "is", "my"];
const aboutMe = ["about", ...myName, "name."];

console.log(aboutMe);
 