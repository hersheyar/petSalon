var globalVariable = "I am in global scope";

function myFunction(){
    var localVariable = "I am in local scope";
    console.log(globalVariable);
    if(true){
        var blockVariable = "I am in a block scope";
        console.log(blockVariable);
    }
    console.log(localVariable);
}

myFunction();

let student1 = {
    name: "Andrew",
    age: 27,
    gender: "Male"
}
console.log(student1)

let dog1 = {
    type: "Labrador Retriever",
    color: "black",
    fixed: "yes",
    fur_type: "short",
    potty_trained: "yes"

}
console.log(dog1);