interface Greet {
    greeter():string;
}

class GMGreeter implements Greet {
    greeter() {
        return "hai" ;
    }
}


// Interface as Function type  ; 
interface Calculator {
    () : string ;
}

let obj : Calculator ; 
obj = () => {
    return "100" ;
}
