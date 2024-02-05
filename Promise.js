let pro=new Promise(function(a,b){
    const res=false;
    if(res){
        a("done")
    }
    else{
        b("error");
    }
});
pro.then(
    re=>console.log(re),
    rej=>console.log(rej)
)
console.log(pro);
let mypromis=new Promise((resolve,reject)=>{
    let a=20,b=20,
    c=a+b;
    if (a===b){
        resolve("Both value are same")
    }
    else{
        reject("both vale deferance");
    }

})
mypromis.then((m)=>{
    console.log(m)
})
mypromis.catch((m)=>{
    console.log(m)
})


    //   let aw=undefined;
        let promiseData= new Promise((resolved,reject)=>{
            setTimeout(() => {
            aw="Hello ";
            resolved("done");
        
   }, 3000);
   })
   promiseData.then(()=>{
       console.log(aw);
   })


const res=new Promise((done,fail)=>{
      
})