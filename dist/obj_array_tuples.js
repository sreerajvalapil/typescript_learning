"use strict";
console.log("The file is loading  . IT s the time ...aadadad");
//Object 
const person = {
    "name": "sreeraj",
    "age": 20,
};
console.log(person.name);
// Array 
const sreyyanToys = ["JCB", "Truck"];
for (const toy of sreyyanToys) {
    console.log(toy);
}
sreyyanToys.forEach(element => {
    console.log("element ..... :" + element);
});
// Object with Araay and Tuples : 
const student1 = {
    name: "sreyaan",
    toyList: ["JCB", "Lorry", "Helicopter"],
    foodTuple: [1, "horlicks"]
};
student1.foodTuple.push("dinosor");
student1.foodTuple.push(10);
student1.foodTuple.push(2, "chockos");
console.log("Values from the  Tuples ");
student1.foodTuple.forEach(element => {
    console.log("The value of foodTyple : " + element);
});
const a = "sss";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["STAFF"] = 2] = "STAFF";
})(Role || (Role = {}));
;
const truck1 = {
    name: "Volvo 1",
    orderRole: Role.ADMIN
};
