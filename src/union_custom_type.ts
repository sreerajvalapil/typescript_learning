
// Here a3 is a variable whose type is literals 
function sum1(a1: number | string, a2 : number | string, a3 : 'as-number' |'as-string') {
    if (typeof a1 === "number" && typeof a2 === "number" && a3 === "as-number") {
        return +a1 + +a;
    }
    if (a3 === "as-string") {
        return a1 + "" + a2;
    }
}

