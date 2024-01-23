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
