let pro=new Promise(function(a,b){
    const res=true;
    if(res){
        a("done")
    }
    else{
        b("error")
    }
});
pro.then(
    re=>console.log(re),
    rej=>console.log(rej)
)