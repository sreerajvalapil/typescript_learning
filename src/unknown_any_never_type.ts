// Unknown data type ;
let unknownA: unknown ;
let anyA: any ;
let b : number = 100 ;
let c : string = "sdsdsd" ;

 //b = unknownA ;
b = anyA;

function computeValue(messageValue:string , code:number) : never {
    throw {messege:messageValue,errorCode:code} ;
}




