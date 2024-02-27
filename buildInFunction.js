
var array = [1,'anjum',23.5,'c'];
console.log(array)

for(var i=0;i<array.length;i++){
    console.log(array[i])
}
// pop,push,shift,unshift

console.log(array.pop())
console.log(array)
console.log(array.push(34))

console.log(array.shift())
console.log(array.unshift('ali'))
console.log(array)

console.log(array.indexOf('ali'))
// js array
var array = [1,2,3,5,"ali",3.5]
console.log(array)
// accessing array through loop
for(var i=0;i<array.length;i++){
    console.log(array[i])
}
array[0]
array[2]=45;
console.log(array)
// pop,push,unshift,shift
console.log(array.pop())
console.log(array)

// push

array.push(34);
console.log(array);

array.unshift(23);

console.log(array);

array.shift();

console.log(array);

// to fine max,min,grade

let language = "JavaScript";

let text = "";
for (let x of language) {
  text += x;
}
console.log(text);
let tun=Math.trunc(4.9)
console.log(`teuncate value is ${tun}`);
let a =10.1;
if (Number.isInteger(a)){
    console.log("Integer");
}
 else console.log("not a integer");
 let text1 = "     Hello World!     ";
 let text2 = text1.trimStart();
 console.log(`value of txt1 ${text2.length }` +  `value of txt1 ${text1.length }`)