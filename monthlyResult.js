//cheak status of subject 
// let mark=57;
// if(mark>=90 && mark<=100){
//     console.log("Grade A++")
// }
// else if(mark>=80 && mark<=90){
//     console.log("Grade A+")
// }else if(mark>=70 && mark<=80){
//     console.log("Grade A")
// }
// else if(mark>=60 && mark<=70){
//     console.log("Grade B")
// }else if(mark>=50 && mark<=60){
//     console.log("Grade C")
// }else if(mark>=40 && mark<=50){
//     console.log("Grade D  ")
// }

//---------------------------------------------------------------------------
//Qardatic formula
let x1=0;
let x2=0;
let a=20;
let b=30;
let c=30;
let g=b*b-4*a*c;
if(g<0)
{
console.log("no real solution");
}	
else if(g==0)
{
x1=-b/2*a;
    console.log("One solution{",x1,"}");
}
else
{
    x1=(-b-(sqrt(g)))/2*a;
        x2=(-b+(sqrt(g)))/2*a;
        console.log("Solution of set{",x1 ,",",x2,"}");
}

console.log("---------------------------------------even or odd---------------------------------------");
// even odd
let as=23;
if(as%2==0)
{
 console.log("even no ");

}
else {
console.log("odd no");
}