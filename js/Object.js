<p id="show"></p>
const persons= {
    fname: "John",
    lname: "Doe",
    age: 25
};
function a(){
    for(var i=0; i<3;i++){
   setTimeout(()=>{
    console.log(i);
   },i*1000)
    }
  }
  a();
  // call apply BigInt
  var person ={
    name:'khurshid',
    hello:function(thing){
      console.log(this.name+"say helo" +thing)
    }
  }
  var person2 ={
    name:'sarkar',
  
  }
  person.hello.call(person2,['hello world'])

let show = "";
for (let x in person) {
    show += person[x] + " ";
}
// object_delete_method in ways
const persons = {
    person3: "John",
    perName: "Doe",
    age: '50',
    person_eye: "blue"
}

delete persons.age;
console.log(persons);
// [] methd tod delete
delete persons2[age];
console.log(persons2);
// obj_protopes
function Person(first, last, age, eyecolor) {
   this. firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

const persons2 = {
    person3: "John",
    perName: "Doe",
    age: '50',
    person_eye: "blue"
}
// iteration
// Create aa Array
const letters = ["a", "b", "c"];

// List all Elements
let text = "";
for (const x of letters) {
    text += x + "<br>";
}
one_anthoer_example
const student = [1, 2, 3, 4, , 5, 6];
let num = "";
for (const y of student) {
    num += y + "<br>"
}
console.log(student);
// destructuring 
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(rest);
// synthx
// const [a, b1] = array;
// const [a, , b] = array;
// const [a = aDefault, b] = array;
// const [a, b, ...rest] = array;
// const [a, , b, ...rest] = array;
// const [a, b, ...{ pop, push }] = array;
// const [a, b, ...[c, d]] = array;

// const { a, b } = obj;
// const { a: a1, b: b1 } = obj;
// const { a: a1 = aDefault, b = bDefault } = obj;
// const { a, b, ...rest } = obj;
// const { a: a1, b: b1, ...rest } = obj;
// const { [key]: a } = obj;

// let a, b, a1, b1, c, d, rest, pop, push;
[a, b] = array;
[a, , b] = array;
[a = aDefault, b] = array;
[a, b, ...rest] = array;
[a, , b, ...rest] = array;
[a, b, ...{ pop, push }] = array;
[a, b, ...[c, d]] = array;

({ a, b } = obj); // parentheses are required
({ a: a1, b: b1 } = obj);
({ a: a1 = aDefault, b = bDefault } = obj);
({ a, b, ...rest } = obj);
({ a: a1, b: b1, ...rest } = obj);
// basic object method(key,value pair)
const object = {
    obj1: 'baic',
    obj2: 'inter',
    obj3: 'advace',
}
object.obj1 = 'new log'
console.log(object);