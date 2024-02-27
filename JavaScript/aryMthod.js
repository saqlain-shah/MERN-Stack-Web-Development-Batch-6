let a=["Ali","Akram","Nayeem","kumail"];

a.push("Amin");
console.log("\n push()");
console.log(a);

a.pop();
console.log("\n pop()");
console.log(a);

a.unshift("Amin");
console.log("\n unshif()");
console.log(a);

a.shift();
console.log("\n shif()");
console.log(a);

let ab=a.splice(1,0,"Akber");
console.log("\n splice()");
console.log(a);

let s=a.slice(1,4);
console.log("\n slice()");
console.log(s);

let isArray=Array.isArray(a);
console.log("\n isArray()");
console.log(isArray);

let length=a.length;
console.log("\n length()");
console.log(length);

let map = a.map(
    (a) => a.charAt(2) == "m"
  );
  console.log("\n Apply map");
  console.log(map);


  let filter = a.filter(
    (a) => a.charAt(2) == "m"
  );
  console.log("\n Apply filter");
  console.log(filter);
  