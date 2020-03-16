 // function with return type , This is not necessory , typescript will comput the type 
function printMyValues(a:string) : void {
    console.log('The value is .. :' +a) ;
    console.log("hai Good morning") ; 
}
function makeUp(a1 : number , a2 :string) : boolean {
    return false;
}

function test()  {
    console.log("I am returning true false ");
    return true ;
}

// function type 
var myFunction = printMyValues ;
myFunction("sreeraj") ;

var myFunction2 :  () => boolean ;
myFunction2 = test;
myFunction2() ;

var myFunction3 : (a :number,b:number) => string ;

function test1 (a : number,b : number) {
    return (a + "" +b).toString() ;  
}

myFunction3 = test1 ;


 // function call back 
function sreeFunction(a:number , b:number, cb: (result:number) => void ) {
    let result = a + b ; 
    cb(result) ;
}
sreeFunction(10,20,(result => {
    console.log("the value after call back is " + result) ;
})) ;

function sumCalculation(a:number ,b:number) :void {
    console.log("The vlaue of the function is .... ") ;
    //return -1;
}



