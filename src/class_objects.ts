class Bank {
    private name :string ;
    private isoCode:string ;
    private employees : string[]  = [];
    constructor(name:string,isoCode:string) {
        this.name = name ;
        this.isoCode = isoCode ;
    }
    printEmployees() {
        console.log("The employe is ... :" + this.name);

    }

    addEmployee(employee:string) {
        this.employees.push(employee) ;
    }


}

const hdfc = new Bank("hdfc" , "hdfc001");
//hdfc.name = "icici" ;

console.log(hdfc) ;