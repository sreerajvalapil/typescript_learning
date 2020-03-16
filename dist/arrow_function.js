"use strict";
function add(a, b) {
    return a + b;
}
let result = add.apply(undefined, [10, 20]);
var myFunction1 = () => {
    console.log("My unction........");
};
myFunction1();
let myfunction2 = (a) => a++;
myfunction2(10);
// True example of calback 
//Function definition
let calculate = (a, mycallBackFunction) => {
    let result = a++;
    return mycallBackFunction(result + "", true);
};
//Invoking the funtion 
calculate(100, (a, b) => {
    if (b === true) {
        return "The result is incremented";
    }
    else {
        return "The result is not incremented";
    }
});
let myfunction5 = (a) => 0 + "";
myfunction5(10);
