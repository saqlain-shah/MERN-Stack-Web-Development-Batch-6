function sum(a, b)
{ 
let c=0;
c=a+b;
	return c;
}
function avg(a,b, c)
{
	let y=0;
	y=(a+b+c)/3;
	return (y);
}
function area(a)
{
	let s=1;
	s=a*a;
	return s;
}
function primater( t){
	let o=1;
	o=4*t;
	return o;
}
console.log("area",area(2));
console.log("Sum",sum(2,3));
console.log("avg",avg(2,3,4));
console.log("paramater",primater(2));

let fun=( arr,c)=>
{  let	temp=0, g=0;
for( i=0;i<=c;i++)
{
   if(i>temp)
   {
       temp=i;
   }
else if(arr<g)
   {
       g=arr;
   }
  
}
console.log("Large No ",temp);
console.log("Small No ",g);
}

let arr=[5,3,2];
	
fun(arr,3);

// let squre=num=>{
//     console.log("Squre is " , sqrt(num))
// }
// squre(4);