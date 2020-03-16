"use strict";
// Spread operator 
let myArray = [100, 200, 300];
let myArrayCopy = [...myArray];
let myArray1 = [...myArray, 10, 40];
// Spread operator in object 
var myObj = {
    id: 100,
    name: "rachittha",
    "grade": "A"
};
var myNewObj = Object.assign({}, myObj);
// Variable number of argument using Spread
var fun1 = (a, b) => {
    return a + "" + b;
};
fun1(10, ["one", "two"]);
var fun2 = (a, ...b) => {
    return a + "" + b;
};
fun2(10, "hai man");
