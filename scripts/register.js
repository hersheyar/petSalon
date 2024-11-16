
let pets = [];

let petSalon ={
    name: "The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip: "22900"
    }
}

let pet1= {
    name: "Buddy",
    age: 80,
    gender: "Male",
    service: "Trim",
    breed:"Poodle"
}
let pet2 = {
    name: "Frank",
    age: 70,
    gender: "Male",
    service: "Wash and Cut",
    breed: "Irish Setter"
}

let pet3 ={
    name:"Mr World Wide",
    age: 25,
    gender: "male",
    service: "Wash",
    breed: "PitBull"
}

pets.push(pet1,pet2,pet3);

function displayPetAmount() {
    let resultLengthMessage = `We have ${pets.length} pets registered.`;
     document.getElementById("registeredPetAmounts").innerHTML = `<p>${resultLengthMessage}</p>`;
}

function displayRegisteredPetNames() {
    let petNameDisplayed = "";
    for (let pet of pets) {
        petNameDisplayed += `${pet.name}<br>`;
    }
    document.getElementById("registeredPetNames").innerHTML = `<p>The Pets registered are:<br>${petNameDisplayed}</p>`;
}

function  getAverageAge(){
    let totalAge = 0;

    for (let pet of pets){
        totalAge += pet.age;
    }
    let averageAge = totalAge / pets.length;
    averageAge = Math.round(averageAge);
    document.getElementById("averagePetAge").innerHTML = `<p>The Average pet age of registed pets is: ${averageAge}</p>`;
}
