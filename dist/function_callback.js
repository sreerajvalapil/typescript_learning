"use strict";
// function with return type , This is not necessory , typescript will comput the type 
function printMyValues(a) {
    console.log('The value is .. :' + a);
    console.log("hai Good morning");
}
function makeUp(a1, a2) {
    return false;
}
function test() {
    console.log("I am returning true false ");
    return true;
}
// function type 
var myFunction = printMyValues;
myFunction("sreeraj");
var myFunction2;
myFunction2 = test;
myFunction2();
var myFunction3;
function test1(a, b) {
    return (a + "" + b).toString();
}
myFunction3 = test1;
// function call back 
function sreeFunction(a, b, cb) {
    let result = a + b;
    cb(result);
}
sreeFunction(10, 20, (result => {
    console.log("the value after call back is " + result);
}));
function sumCalculation(a, b) {
    console.log("The vlaue of the function is .... ");
    //return -1;
}
