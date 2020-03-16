"use strict";
function add(p1, p2) {
    return p1 + p2;
}
const result = add(10, 20);
console.log("The resultis ........  :" + result);

// union data type
function add1(p1, p2) {
    if (p2 === true) {
        p1 = p1 + 'good';
        if (typeof p1 === "number") {
            return p1++;
        }
    }
}
// Here a3 is a variable whose type is literals 
function sum(a1, a2, a3) {
    if (a3 === "as-number") {
        return +a1 + +a2;
    }
    if (a3 === "as-string") {
        return a1 + "" + a2;
    }
}
function calculate(a1, a2, a3) {
    if (typeof a1 === "number" && typeof a2 === "number") {
        return a1 + a2;
    }
}
const sreeraj = { name: "sreeraj", age: 37 };
var myVar = { name: "viva", mark: 89 };
myVar = false;
