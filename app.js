console.log("The file is loading  . IT s the time ...aadadad");
//Object 
var person = {
    "name": "sreeraj",
    "age": 20
};
console.log(person.name);
// Array 
var sreyyanToys = ["JCB", "Truck"];
for (var _i = 0, sreyyanToys_1 = sreyyanToys; _i < sreyyanToys_1.length; _i++) {
    var toy = sreyyanToys_1[_i];
    console.log(toy);
}
sreyyanToys.forEach(function (element) {
    console.log("element ..... :" + element);
});
// Object with Araay and Tuples : 
var student1 = {
    name: "sreyaan",
    toyList: ["JCB", "Lorry", "Helicopter"],
    foodTuple: [1, "horlicks"]
};
student1.foodTuple.push("dinosor");
student1.foodTuple.push(10);
student1.foodTuple.push(2, "chockos");
console.log("Values from the  Tuples ");
student1.foodTuple.forEach(function (element) {
    console.log("The value of foodTyple : " + element);
});
var a = "sss";
