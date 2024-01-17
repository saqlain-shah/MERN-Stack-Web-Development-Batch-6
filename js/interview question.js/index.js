//   question_noconst
const a = [];
const b = a;
console.log(a == b);
console.log(a == b);
// question_no -2
let c = [2];
let d = [2];
console.warn(a == b);
console.warn(a === b);
// question_3
const z = [1, 2, 3, 4, 5];
const f = 'sarkar';
console.warn(...z);
// question_4
console.warn(typeof NaN);
// question_5
console.log(10 - -10);
// question_6
const set = new Set([1, 2, 3, 3, 4, 5, 6]);
console.log(set);
// question_7
let name = 'sarkar';
console.log(delete name)
// qusetion_8
const data = {
    name: 'khurshid_alam',
}
console.log(delete data.name);
console.warn(data)
// qusetion_9
const personInfo = {
    name: 'web_dev',
}
console.warn(delete personInfo);
console.log(personInfo);
// qusetion_10
const array = [1, 2, 3, 5, 6, 5];
const [x, y, r] = array;
console.log(array);
console.log(x, y, r);
// question_11
const array1 = [1, 2, 3, 4, 5];
const [, p] = array1;
console.log(array1);
console.log(p);
// question_11
// can you get name property without using .operator
const object1 = {
    names: 'sara_khan',
}
const { names } = object1;
console.log(names);