"use strict";
class Bank {
    constructor(name, isoCode) {
        this.name = name;
        this.isoCode = isoCode;
    }
    printEmployees() {
        console.log("The employe is ... :" + this.name);
    }
}
const hdfc = new Bank("hdfc", "hdfc001");
//hdfc.name = "icici" ;
console.log(hdfc);
