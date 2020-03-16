function add(a:number,b:number) {
    return a + b ;
}

let result = add.apply(undefined,[10,20]);

var myFunction1 = () => {
    console.log("My unction........") ;
}
myFunction1() ;



let myfunction2 = (a :number) => a++ ;
myfunction2(10) ;


// True example of calback 

//Function definition
let calculate = (a:number , mycallBackFunction: (i:string,j:boolean) => string) => {
    let result = a ++ ; 
   return mycallBackFunction(result+"",true) ;
} ;

//Invoking the funtion 
calculate(100,(a , b) => {
    if(b === true) {
        return "The result is incremented" ;
    } else {
        return "The result is not incremented" ;
    }
});

let myfunction5 = (a :number) : string => 0+"" ;
myfunction5(10) ;

