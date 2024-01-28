function fun1(){
    let a=8;
    function fun2(){
        console.log(a);
    }
    return fun2()
}
fun1();


function fun3(){
    let a=8;
    function fun4(){
        console.log(a);
    }
     a=20;
    return fun4()
}
fun3();


function fun5(){
    let a=8;
    function fun6(){
        console.log(a);
        function fun7(){
        console.log(a);
        }
    return fun7()

    }
    
    return fun6()
}
fun5();

function fun(){
    let a=8;
    function iner1(){
        console.log(" middle inner section ",a);
        function iner2(){
    
        console.log(" last inner section ",a);
        }
     a=49;
    return iner2()

    }
    a=45;
    return iner1()
}
fun();