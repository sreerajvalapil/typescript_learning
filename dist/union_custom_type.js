"use strict";
// Here a3 is a variable whose type is literals 
function sum1(a1, a2, a3) {
    if (typeof a1 === "number" && typeof a2 === "number" && a3 === "as-number") {
        return +a1 + +a;
    }
    if (a3 === "as-string") {
        return a1 + "" + a2;
    }
}
