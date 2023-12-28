console.log("varible in javascript ");
var a = 'person';
console.log(a);
// var has a hoisting & global scope it can easily access,also it add in window every time problem its mean it jump on top before they are excute on exaple
console.log(person1);
var person1 = "khurshid shah";
// let has functional scope it mean it cannot take from a function but outside function we can easily take from outerside
let personInfo = { name: 'khurshihd' };
// function with let 
function personInfoDetail() {
    console.log(personInfo);
}
personInfoDetail();
console.log(typeof (personInfoDetail));
console.log(personInfo);
console.log(typeof (personInfo));
// array concept in JS
const NumberOfStudent = ['khurshid', 'sarkar', 'ali', 'hassan'];
console.log(NumberOfStudent);
console.log(typeof (NumberOfStudent));
// if we want to check how many student tha two method allow according to our usage we can easily used boht method;
console.log(NumberOfStudent.length);
// or it store in another varible;
const TotalStudentCheck = NumberOfStudent.length;
console.log(TotalStudentCheck);
console.log(typeof (NumberOfStudent));
console.log(typeof (TotalStudentCheck));
// some array method
// slice,splice,index ,length ,shift,unshift,push,pop,flat,toString,delete,join etc
// slice method
const arr1 = ["name", 'person', 'detail', 'location'];
const arrSlice = arr1.pop();
console.log(arr1);
console.log(arrSlice);
// splice method
// in splice method it take two paramater,start  & add 
const spliceMethod = ['name', 'section', 'class'];
const AplySpliceMehotd = spliceMethod.splice(1, 2);
console.log(spliceMethod);
// flat method remove combine each indec in one Array
const EngLang = ['a,', ['b'], 'c', ['d'], 'e', 'f'];
const AplyFlateMethod = EngLang.flat();
console.log(EngLang);
console.log(AplyFlateMethod);
// toString method convert on to string ""
const personNumber = 03446055207;
console.log(personNumber);
console.log(typeof (personNumber));
const personNumberToString = personNumber.toString();
console.log(personNumberToString);

// concat method to combine tow or more arrray into one
let arr3 = ['fruit', 'dishes', 'tools', 'device', 'method', 'tech'];
let arr4 = ['mangoes', 'bannana', 'nihari', 'biryani'];
let arr5 = arr3.concat(arr4);
console.log(arr3);
console.log(arr4);
console.log(arr5);

// slice methd
const SlicEmETHOD = arr4.slice(1);
console.log(SlicEmETHOD);
// shift method
const shiftMEHTOD = arr3.shift();
console.log(shiftMEHTOD);
console.log(shiftMEHTOD);
// unshift method
// sort method is used to array in alphabaitclay
const Lang = ['balti', 'boloch', 'sheena', 'panjabi', 'arabi'];
console.log(Lang);
const SortingArray = Lang.sort();
console.log(SortingArray);
// joinmethod to join 
const JOinLang_sortingArray = Lang.join(SortingArray);
console.log(JOinLang_sortingArray);

// array wtih forEach 
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);
function myFunction(value, index, array) {
    txt += value;
}
console.log(txt);
// array with Map() check map method does not change orignal array check it output 
const num = [1, 2, 3, 4, 5, 6, 7, 8];
const num2 = num.map(runfunction);
function runfunction(value, index, array) {
    return value * 2;
}
console.log(num);
console.log(num2);
// array flatMapo method used ot make a new array ;
const arr7 = [1, 2, 3, 4, 5];
const FlatMapMethod = arr7.flatMap((x) => x * 2);
console.log(FlatMapMethod);
console.log(arr7);
const red = arr7.reduce(showfunction);
function showfunction(total, value) {
    return total + value;
}
console.log(red);
// praCTICE ON MORE THIS IS BASIC EXAMPLE OF SOME ARRAY METHOD CHECK MORE (.....SARKAR,...JEEEE)