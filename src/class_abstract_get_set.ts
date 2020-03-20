interface Foo {
bar:number ;
applyFoo():void;
}

class Bar implements Foo {
    bar:number = 100 ;
    applyFoo() {
        console.log("i am foo") ;
    }
}


abstract class Department {
    name?:string;
    abstract calculateBalance() : number;
}

class AccountDepartment extends Department {


    constructor(private address:string) {
        super();
        this.address =address ;
    }
    calculateBalance() {
        return 1000 ;
    }

    get getAddress() {
        return this.address ;
    }

    set setAddress(add:string) {
        this.address = add ;
    }
}

// type casting 
//<string> variable
//varible as string

// Optionals 
//with ?

// ??  usage 
// ? usage as optional 
// bind 
// Generics 
// keyof 
// intersection 
//import and export modules 

// yarn 
//yarn add typescript --dev
//what is is yarn.lock , similar ti package-lock
// integration test using mocha and chai
// we shoudl use ESLint , threre ate TSLint 
// Promise()
// async await

// scoped css ,  shadow dom 



